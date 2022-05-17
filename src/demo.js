import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Error from './pages/404';
import './App.css';
import './css/bootstrap.css';
import Home from './pages/Home';
import Login from './account/Login';
import Register from './account/Register';
import RegisterSuccess from './account/RegisterSuccess';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Volunteer from './pages/Volunteer';
import ForgotPassword from './account/ForgotPassword';
import LoginError from './account/LoginError';
import RegisterError from './account/RegisterError';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import AddBlog from './pages/AddBlog';
import Campaign from './pages/Campaign';
import AddCampaign from './pages/AddCampaign';
import CampaignSingle from './pages/CampaignSingle';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';
import EventSingle from './pages/EventSingle';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import OurImpact from './pages/OurImpact';
import PaymentTerms from './pages/PaymentTerms';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/Faq';
import MyBlog from './account/MyBlog';
import MyDonation from './account/MyDonation';
import MyCampaign from './account/MyCampaign';
import MyEvents from './account/MyEvents';
import DonateNow from './pages/DonateNow';
import LoadBalance from './pages/LoadBalance';
import UpdateProfile from './account/UpdateProfile';
import AdminLogin from './admin/AdminLogin';
import AdminRegister from './admin/AdminRegister';
import AdminDashboard from './admin/AdminDashboard';
import DisplayUser from './admin/DisplayUser';
import UpdateUser from './admin/UpdateUser';
import DisplayBlogs from './admin/DisplayBlogs';
import DisplayCampaigns from './admin/DisplayCampaigns';
import DisplayEvents from './admin/DisplayEvents';
import DisplayContacts from './admin/DisplayContacts';
import DisplayDonations from './admin/DisplayDonations';
import DisplayVolunteer from './admin/DisplayVolunteers';
import DisplayAdmin from './admin/DisplayAdmin';
import UpdateBlogs from './admin/UpdateBlogs';
import UpdateAdmin from './admin/UpdateAdmin';
import UpdateCampaigns from './admin/UpdateCampaigns';
import UpdateContacts from './admin/UpdateContacts';
import UpdateDonations from './admin/UpdateDonations';
import UpdateEvents from './admin/UpdateEvents';
import UpdateVolunteers from './admin/UpdateVolunteers';
import AddTeam from './pages/AddTeam';
import DisplayTeams from './admin/DisplayTeams';
import UpdateTeams from './admin/UpdateTeams';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/register' exact component={Register} />
      <Route path='/register-error' exact component={RegisterError} />
      <Route path='/register-success' exact component={RegisterSuccess} />
      <Route path='/login' exact component={Login} />
      <Route path='/login-error' exact component={LoginError} />
      <Route path='/forgotPassword' exact component={ForgotPassword} />
  
      <Route path='/add-campaign' exact component={AddCampaign} />
      <Route path='/campaign' exact component={Campaign} />
      <Route path='/become-a-volunteer' exact component={Volunteer} />
      <Route path='/causes' exact component={Campaign} />
      <Route path='/single-cause/:id' exact component={CampaignSingle} />
      <Route path='/team' exact component={Team} />
      <Route path='/add-team' exact component={AddTeam} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/about' exact component={AboutUs} />
      <Route path='/our-impact' exact component={OurImpact} />
      <Route path='/add-events' exact component={AddEvent} />
      <Route path='/events' exact component={Events} />
      <Route path='/single-event/:id' exact component={EventSingle} />
      <Route path='/gallery' exact component={Gallery} />
      <Route path='/add-blog' exact component={AddBlog} />
      <Route path='/blog' exact component={Blog} />
      <Route path='/frequently-asked-question' exact component={FAQ} />
      <Route path='/single-post/:id' exact component={BlogSingle} />
      <Route path='/privacy-policy' exact component={PrivacyPolicy} />
      <Route path='/payment-terms' exact component={PaymentTerms} />
      <Route path='/refund-policy' exact component={RefundPolicy} />
      <Route path='/donate-now/:id' exact component={DonateNow} />
      <Route path='/donate-now/:id' exact component={DonateNow} />
      <Route path='/my-blogs/:id' exact component={MyBlog} />
      <Route path='/my-campaigns/:id' exact component={MyCampaign} />
      <Route path='/my-events/:id' exact component={MyEvents} />
      <Route path='/my-donations/:id' exact component={MyDonation} />
      <Route path='/load-balance/:id' exact component={LoadBalance} />
      <Route path='/load-balance/:id' exact component={LoadBalance} />
      <Route path='/update-profile/:id' exact component={UpdateProfile} />

      <Route path='/admin-login' exact component={AdminLogin} />
      <Route path='/admin-register' exact component={AdminRegister} />
      <Route path='/admin-dashboard' exact component={AdminDashboard} />
      <Route path='/dashboard-blogs' exact component={DisplayBlogs} />
      <Route path='/dashboard-teams' exact component={DisplayTeams} />
      <Route path='/dashboard-causes' exact component={DisplayCampaigns} />
      <Route path='/dashboard-contacts' exact component={DisplayContacts} />
      <Route path='/dashboard-donations' exact component={DisplayDonations} />
      <Route path='/dashboard-events' exact component={DisplayEvents} />
      <Route path='/dashboard-users' exact component={DisplayUser} />
      <Route path='/dashboard-admins' exact component={DisplayAdmin} />
      <Route path='/dashboard-volunteers' exact component={DisplayVolunteer} />
      <Route path='/update-blog/:id' exact component={UpdateBlogs} />
      <Route path='/update-cause/:id' exact component={UpdateCampaigns} />
      <Route path='/update-blog/:id' exact component={UpdateBlogs} />
      <Route path='/update-team/:id' exact component={UpdateTeams} />
      <Route path='/update-contact/:id' exact component={UpdateContacts} />
      <Route path='/update-donation/:id' exact component={UpdateDonations} />
      <Route path='/update-event/:id' exact component={UpdateEvents} />
      <Route path='/update-user/:id' exact component={UpdateUser} />
      <Route path='/update-admin/:id' exact component={UpdateAdmin} />
      <Route path='/update-volunteer/:id' exact component={UpdateVolunteers} />
      
      </BrowserRouter>
 </div>
  );
}

export default App;
