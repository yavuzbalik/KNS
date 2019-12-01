const loadScript = Symbol('loadScript');

let GoogleChart = {}; // eslint-disable-line

class GoogleCharts {
  [loadScript]() {
    if (!this.scriptPromise) {
      this.scriptPromise = new Promise(resolve => {
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = () => {
          GoogleChart.api = window.google;
          GoogleChart.api.charts.load('current', { packages: ['corechart'] });
          GoogleChart.api.charts.setOnLoadCallback(() => {
            resolve();
          });
        };
        script.src = 'https://www.gstatic.com/charts/loader.js';
        head.appendChild(script);
      });
    }
    return this.scriptPromise;
  }

  load(callback, type) {
    return this[loadScript]().then(() => {
      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }
        this.api.charts.load('current', { packages: type });
        this.api.charts.setOnLoadCallback(callback);
      } else {
        callback();
      }
    });
  }
}

GoogleChart = new GoogleCharts();

export default GoogleChart;

if (module.hot) {
  module.hot.accept();
}
