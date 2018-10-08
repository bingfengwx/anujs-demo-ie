import Loadable from 'react-loadable';
import Loading from '../../components/loading';

const AsyncPage1 = Loadable({
    loader: () => import("./index"),
    loading: Loading
  })

module.exports = AsyncPage1;