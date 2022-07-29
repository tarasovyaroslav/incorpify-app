import React from 'react';

import StyledIcon from './styles';

import { ReactComponent as BillingView } from './assets/Billing/view.svg';
import { ReactComponent as BillingVisa } from './assets/Billing/visa.svg';
import { ReactComponent as BillingEdit } from './assets/Billing/edit.svg';
import { ReactComponent as BillingDate } from './assets/Billing/date.svg';

import { ReactComponent as DocumentsAnnual } from './assets/Documents/annual.svg';
import { ReactComponent as DocumentsArticles } from './assets/Documents/articles.svg';
import { ReactComponent as DocumentsEin } from './assets/Documents/ein.svg';
import { ReactComponent as DocumentsFiling } from './assets/Documents/filing.svg';
import { ReactComponent as DocumentsStatement } from './assets/Documents/statement.svg';

import { ReactComponent as HeaderAlerts } from './assets/Header/alerts.svg';
import { ReactComponent as HeaderHelp } from './assets/Header/help.svg';
import { ReactComponent as HeaderSettings } from './assets/Header/settings.svg';

import { ReactComponent as SidebarActions } from './assets/Sidebar/actions.svg';
import { ReactComponent as SidebarBilling } from './assets/Sidebar/billing.svg';
import { ReactComponent as SidebarDocuments } from './assets/Sidebar/documents.svg';
import { ReactComponent as SidebarMailbox } from './assets/Sidebar/mailbox.svg';
import { ReactComponent as SidebarMyBusiness } from './assets/Sidebar/mybusiness.svg';
import { ReactComponent as SidebarProfile } from './assets/Sidebar/profile.svg';
import { ReactComponent as SidebarServices } from './assets/Sidebar/services.svg';
import { ReactComponent as SidebarSettings } from './assets/Sidebar/settings.svg';
import { ReactComponent as SidebarSupport } from './assets/Sidebar/support.svg';

import { ReactComponent as ServicesAgent } from './assets/Services/agent.svg';
import { ReactComponent as ServicesBookkeeping } from './assets/Services/bookkeeping.svg';
import { ReactComponent as ServicesMerchant } from './assets/Services/merchant.svg';
import { ReactComponent as ServicesTrademark } from './assets/Services/trademark.svg';

import { ReactComponent as ProfileDate } from './assets/Profile/date.svg';
import { ReactComponent as ProfileOrder } from './assets/Profile/order.svg';
import { ReactComponent as ProfileStatus } from './assets/Profile/status.svg';

let SelectedIcon;

const Icon = ({ icon, ...otherProps }) => {
  switch (icon) {
    // Billing
    case 'billing:view':
      // SelectedIcon = <BillingView {...otherProps} />;
      SelectedIcon = <BillingView />;
      break;
    case 'billing:date':
      SelectedIcon = <BillingDate />;
      break;
    case 'billing:visa':
      SelectedIcon = <BillingVisa />;
      break;
    case 'billing:edit':
      SelectedIcon = <BillingEdit />;
      break;

    // Documents
    case 'documents:annual':
      SelectedIcon = <DocumentsAnnual />;
      break;
    case 'documents:articles':
      SelectedIcon = <DocumentsArticles />;
      break;
    case 'documents:ein':
      SelectedIcon = <DocumentsEin />;
      break;
    case 'documents:filing':
      SelectedIcon = <DocumentsFiling />;
      break;
    case 'documents:statement':
      SelectedIcon = <DocumentsStatement />;
      break;

    // Header
    case 'header:alerts':
      SelectedIcon = <HeaderAlerts />;
      break;
    case 'header:help':
      SelectedIcon = <HeaderHelp />;
      break;
    case 'header:settings':
      SelectedIcon = <HeaderSettings />;
      break;

    // Sidebar
    case 'sidebar:actions':
      SelectedIcon = <SidebarActions />;
      break;
    case 'sidebar:billing':
      SelectedIcon = <SidebarBilling />;
      break;
    case 'sidebar:documents':
      SelectedIcon = <SidebarDocuments />;
      break;
    case 'sidebar:mailbox':
      SelectedIcon = <SidebarMailbox />;
      break;
    case 'sidebar:mybusiness':
      SelectedIcon = <SidebarMyBusiness />;
      break;
    case 'sidebar:profile':
      SelectedIcon = <SidebarProfile />;
      break;
    case 'sidebar:services':
      SelectedIcon = <SidebarServices />;
      break;
    case 'sidebar:settings':
      SelectedIcon = <SidebarSettings />;
      break;
    case 'sidebar:support':
      SelectedIcon = <SidebarSupport />;
      break;

    // Services
    case 'services:agent':
      SelectedIcon = <ServicesAgent />;
      break;
    case 'services:bookkeeping':
      SelectedIcon = <ServicesBookkeeping />;
      break;
    case 'services:merchant':
      SelectedIcon = <ServicesMerchant />;
      break;
    case 'services:trademark':
      SelectedIcon = <ServicesTrademark />;
      break;

    // Profile
    case 'profile:date':
      SelectedIcon = <ProfileDate />;
      break;
    case 'profile:order':
      SelectedIcon = <ProfileOrder />;
      break;
    case 'profile:status':
      SelectedIcon = <ProfileStatus />;
      break;

    default:
      return;
  }

  return <StyledIcon {...otherProps}>{SelectedIcon}</StyledIcon>;
};

export default Icon;
