import '../scss/main.scss';

require.ensure([], () => {
    require('./app');
});