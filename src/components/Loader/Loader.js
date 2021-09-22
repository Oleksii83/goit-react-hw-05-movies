import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function loader({ query }) {
  //other logic

  return (
    <div className={s.loader}>
      <Loader
        type="Watch"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
    </div>
  );
}
