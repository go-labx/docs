import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        The lightning framework is designed to be easy to use and quick to get
        started with.
      </>
    ),
  },
  {
    title: 'Full-Featured web framework',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Despite its lightweight design, lightning is a full-featured web
        framework that provides everything you need to build a web application.
      </>
    ),
  },
  {
    title: 'High Performance',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        The framework is designed to be lightweight and fast, it can handle a
        large number of requests with low latency.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
