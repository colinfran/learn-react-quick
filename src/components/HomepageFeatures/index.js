import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple and quick',
    img: require('@site/static/img/fast-time.png').default,
    description: (
      <>
        This course is designed for beginners with little to no prior 
        programming experience. We break down complex concepts into 
        easy-to-understand lessons, making React.js accessible to 
        everyone.
      </>
    ),
  },
  {
    title: 'Hands-On Experience',
    img: require('@site/static/img/programmer.png').default,
    description: (
      <>
        Get ready to dive right into coding! Learn by building real 
        React applications from scratch, gaining practical experience 
        that will boost your confidence as a developer.
      </>
    ),
  },
  {
    title: 'Step-by-Step Guidance',
    img: require('@site/static/img/steps.png').default,
    description: (
      <>
        Our detailed lessons and explanations ensure you never get lost. 
        Follow along at your own pace and receive clear guidance every 
        step of the way.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={`feature-logos ${styles.featureSvg}`} role="img" src={img}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
