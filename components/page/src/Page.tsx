import { FC, Fragment, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { SkipLink } from '@not-govuk/components';
import { Header, HeaderProps } from '@hods/header';
import { Footer, NavigationLink } from '@hods/footer';

import '../assets/Page.scss';

const favicon = require('../assets/images/ho-favicon.ico').default;
const maskIcon = require('../assets/images/ho-mask-icon.svg').default;
const appleTouchIcon180 = require('../assets/images/ho-apple-touch-icon-180x180.png').default;
const appleTouchIcon167 = require('../assets/images/ho-apple-touch-icon-167x167.png').default;
const appleTouchIcon152 = require('../assets/images/ho-apple-touch-icon-152x152.png').default;
const appleTouchIcon = require('../assets/images/ho-apple-touch-icon.png').default;
const ogImage = require('../assets/images/ho-opengraph-image.png').default;

export type PageProps = StandardProps & HeaderProps & {
  /** Footer links */
  footerNavigation?: NavigationLink[]
  /** Footer content */
  footerContent?: ReactNode
  /** Title of the HTML page (can be overridden via Helmet  */
  title?: string
  /** HTML prototyping support (adds the GDS JavaScript) */
  jsForHtml?: boolean
};

export const Page: FC<PageProps> = ({
  accountHref,
  children,
  classBlock,
  classModifiers,
  className,
  footerContent,
  footerNavigation,
  navigation,
  jsForHtml = false,
  serviceHref,
  serviceName: _serviceName,
  signOutHref,
  signOutText,
  title: _title,
  username,
  ...attrs
}) => {
  const classes = classBuilder('hods-page', classBlock, classModifiers, className);
  const serviceName = _serviceName || _title;
  const title = _title || _serviceName || 'Home Office';
  const headerProps = {
    accountHref,
    navigation,
    serviceHref,
    serviceName,
    signOutHref,
    signOutText,
    username
  };
  const footerProps = {
    navigation: footerNavigation
  };

  return (
    <Fragment>
      { !jsForHtml ? null : (
        <script dangerouslySetInnerHTML={{ __html: 'document.body.className = (document.body.className ? document.body.className + \'js-enabled\' : \'js-enabled\');' }} />
      ) }
      <div {...attrs} className={classes()}>
        <Helmet>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" sizes="16x16 32x32 48x48" href={favicon} type="image/x-icon" />
          <link rel="mask-icon" href={maskIcon} color="#0b0c0c" />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon180} />
          <link rel="apple-touch-icon" sizes="167x167" href={appleTouchIcon167} />
          <link rel="apple-touch-icon" sizes="152x152" href={appleTouchIcon152} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
          <meta property="og:image" content={ogImage} />
        </Helmet>
        <SkipLink id="skip-link" for="main-content" />
        <Header {...headerProps} className={classes('header')} />
        <div className={classes('body')}>
          <div className={classes('container') + ' hods-width-container'}>
            <main id="main-content" className={classes('main')} role="main">
              {children}
            </main>
          </div>
        </div>
        <Footer {...footerProps}>{footerContent}</Footer>
      </div>
      { !jsForHtml ? null : (
        <Fragment>
          <script src="https://raw.githubusercontent.com/alphagov/govuk-frontend/abe1672b68fe08a55fb3562a684b408a5d452bb0/package/govuk/all.js" />
          <script dangerouslySetInnerHTML={{ __html: 'window.GOVUKFrontend.initAll();' }} />
        </Fragment>
      ) }
    </Fragment>
  );
};

export default Page;
