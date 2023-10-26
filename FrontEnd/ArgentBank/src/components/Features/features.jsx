import React from 'react';
import FeatureItem from './FeatureItem/featureItem';
import Chat from '../../assets/images/icon-chat.png';
import Money from '../../assets/images/icon-money.png';
import Security from '../../assets/images/icon-security.png';

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        iconSrc={Chat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        iconSrc={Money}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        iconSrc={Security}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

export default Features;

