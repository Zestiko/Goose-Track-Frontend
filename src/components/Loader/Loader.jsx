import scss from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={scss.body}>
      <div className={scss.wrapper}>
        <div className={scss.bird}>
          <div className={scss.head}>
            <div className={`${scss.eye} ${scss['eye_right']}`}>
              <div
                className={`${scss['eye__inner']} ${scss['eye__inner_right']}`}
              >
                <div className={scss['eye__pupil']}></div>
              </div>
            </div>

            <div className={scss.nose}></div>

            <div className={`${scss.eye} ${scss['eye_left']}`}>
              <div
                className={`${scss['eye__inner']} ${scss['eye__inner_left']}`}
              >
                <div className={scss['eye__pupil']}></div>
              </div>
            </div>
          </div>

          <div className={scss['body-wrap']}>
            <div className={scss.body1}></div>
            <div className={scss.body2}></div>
            <div className={scss.body3}></div>
          </div>

          <div className={scss.legs}>
            <div className={`${scss.leg} ${scss['leg_left']}`}></div>
            <div className={`${scss.leg} ${scss['leg_right']}`}></div>
          </div>

          <div className={scss.tail}></div>

          <div className={scss['pseudo-knife']}>
            <div className={scss['pseudo-knife__blade']}></div>
            <div className={scss['pseudo-knife__handle']}></div>
          </div>

          <div className={scss.knife}>
            <div className={scss['knife__blade']}></div>
            <div className={scss['knife__handle']}></div>
          </div>
        </div>
      </div>
    </div>
  );
}