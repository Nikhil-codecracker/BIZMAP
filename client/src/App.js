import React, { Component } from 'react';
import Graph from './Graph';
import { DiscussionForum } from './DiscussionForum';
import { ActiveCases } from './ActiveCases';
import { Twitter } from './Twitter';
import Categories from './Categories';
import Modal from './Modal';
import axios from 'axios';
import { whitesmoke } from 'color-name';

const Category = [
  { category: 'All', id: 0, className: 'fa fa-cogs' },
  { category: 'Contact Tracing', id: 1, className: 'fa fa-phone' },
  { category: 'Diagnostics', id: 2, className: 'fa fa-certificate' },
  { category: 'Employee Support', id: 3, className: 'fa fa-users' },
  {
    category: 'Infection Control',
    id: 4,
    className: 'fa fa-exclamation-triangle'
  },
  { category: 'Medication', id: 5, className: 'fa fa-plus' },
  { category: 'Patient Engagement', id: 6, className: 'fa fa-user' },
  { category: 'Portal', id: 7, className: 'fa fa-lock' },
  { category: 'PPE', id: 8, className: 'fa fa-medkit' },
  { category: 'Support', id: 9, className: 'fa fa-cogs' },
  { category: 'Vaccinatory', id: 10, className: 'fa fa-user-md' },
  {
    category: 'Financial Support Providers',
    id: 11,
    className: 'fa fa-credit-card'
  },
  { category: 'Telemedicine', id: 12, className: 'fa fa-stethoscope' },
  { category: 'Tele Education Resources', id: 13, className: 'fa fa-mobile' },
  { category: 'Covid Specific Hospitals', id: 14, className: 'fa fa-hospital' },
  { category: ' Free Food Providers', id: 15, className: 'fa fa-bread-slice' },
  { category: 'Patient Tracing Apps', id: 16, className: 'fa fa-search' },
  { category: 'Self Reporting Apps', id: 17, className: 'fa fa-cogs' },
  { category: 'Data Sets', id: 18, className: 'fa fa-database' },
  { category: 'Automobile Related', id: 19, className: 'fa fa-car' },
  { category: 'Skill Training', id: 20, className: 'fa fa-adjust' },
  { category: 'Mask Providers', id: 21, className: 'fa fa-thermometer' },
  { category: 'Heat Map', id: 22, className: 'fa fa-street-view' },
  { category: 'Volunteering Org', id: 23, className: 'fa fa-building' },
  { category: 'Others', id: 24, className: 'fas fa-bars' },
  { category: 'Unemployed', id: 25, className: 'fa fa-male' },
  { category: 'Volunteers', id: 26, className: 'fa fa-user' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        { selected: 1, color: 'forestgreen' },
        { selected: 1, color: 'red' },
        { selected: 1, color: 'black' },
        { selected: 1, color: 'blue' },
        { selected: 1, color: '#0B472B' },
        { selected: 1, color: 'forestgreen' },
        { selected: 1, color: 'red' },
        { selected: 1, color: 'black' },
        { selected: 1, color: 'blue' },
        { selected: 1, color: '#0B472B' },
        { selected: 1, color: 'forestgreen' },
        { selected: 1, color: 'red' },
        { selected: 1, color: 'black' },
        { selected: 1, color: 'blue' },
        { selected: 1, color: '#0B472B' },
        { selected: 1, color: 'forestgreen' },
        { selected: 1, color: 'red' },
        { selected: 1, color: 'black' },
        { selected: 1, color: 'blue' },
        { selected: 1, color: '#0B472B' },
        { selected: 1, color: 'forestgreen' },
        { selected: 1, color: 'red' },
        { selected: 1, color: 'black' },
        { selected: 1, color: 'blue' },
        { selected: 1, color: '#0B472B' },
        { selected: 1, color: 'forestgreen' },
        { selected: 1, color: 'red' }
      ],
      data: {
        active: 0,
        cases: 0,
        critical: 0,
        deaths: 0,
        recovered: 0,
        todayDeaths: 0
      }
    };
  }

  componentDidMount() {
    axios.get('https://corona.lmao.ninja/v2/countries/India').then(response => {
      this.setState({
        data: {
          ...this.state.data,
          active: response.data.active,
          cases: response.data.cases,
          critical: response.data.critical,
          deaths: response.data.deaths,
          recovered: response.data.recovered,
          todayDeaths: response.data.todayDeaths
        }
      });
      console.log(response);
    });
  }

  toggle = (e, index) => {
    console.log(this);
    var value = 1;
    var array = this.state.category;
    console.log(this.state.category);
    if (index == 0) {
      if (array[0].selected == 0) {
        for (var i = 0; i < array.length; i++) {
          array[i].selected = 1;
        }
      } else {
        for (var i = 0; i < array.length; i++) {
          array[i].selected = 0;
        }
      }
    } else {
      for (var i = 0; i < this.state.category.length; i++) {
        value = value * this.state.category[i].selected;
      }
      if (value === 1) {
        for (var i = 0; i < this.state.category.length; i++) {
          array[i].selected = 0;
        }
        array[index].selected = 1;
      } else {
        if (this.state.category[index].selected === 1) {
          array[index].selected = 0;
        } else {
          array[index].selected = 1;
        }
      }
    }
    this.setState({ category: array });
  };
  render() {
    return (
      <div className='App'>
        <div
          id='main-wrapper'
          data-theme='light'
          data-layout='vertical'
          data-navbarbg='skin1'
          data-sidebartype='full'
          data-sidebar-position='fixed'
          data-header-position='fixed'
          data-boxed-layout='full'
        >
          {/* {console.log(this.state.data)} */}
          {/* ============================================================== */}
          {/* Topbar header - style you can find in pages.scss */}
          {/* ============================================================== */}
          <header className='topbar' data-navbarbg='skin1'>
            <nav
              className='navbar top-navbar navbar-expand-md navbar-dark'
              style={{ backgroundColor: '#46b7f5' }}
            >
              <div
                className='navbar-header'
                data-logobg='skin6'
                style={{ backgroundColor: '#46b7f5' }}
              >
                {/* This is for the sidebar toggle which is visible on mobile only */}
                <a
                  className='nav-toggler waves-effect waves-light d-block d-md-none'
                  href='javascript:void(0)'
                >
                  <i className='fas fa-bars' style={{ color: 'white' }} />
                </a>
                <a className='navbar-brand'>
                  {/* Logo icon */}
                  <b className='logo-icon'>
                    <img
                      src='logo.png'
                      className='dark-logo'
                      style={{ height: '60px', width: '60px' }}
                    />
                  </b>
                  {/*End Logo icon */}
                </a>
                <a
                  className='topbartoggler d-block d-md-none waves-effect waves-light'
                  href='javascript:void(0)'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <i className='fa fa-plus' style={{ color: 'white' }} />
                </a>
              </div>
              {/* ============================================================== */}
              {/* End Logo */}
              {/* ============================================================== */}
              <div
                className='navbar-collapse collapse'
                id='navbarSupportedContent'
                data-navbarbg='skin1'
                style={{ backgroundColor: '#46b7f5' }}
              >
                {/* ============================================================== */}
                {/* toggle and nav items */}
                {/* ============================================================== */}
                <ul className='navbar-nav float-left mr-auto'>
                  <li className='nav-item d-none d-md-block'>
                    <a
                      className='nav-link sidebartoggler waves-effect waves-light'
                      href='javascript:void(0)'
                      data-sidebartype='mini-sidebar'
                    >
                      <i className='fas fa-bars' style={{ color: 'white' }} />
                    </a>
                  </li>
                  {/* ============================================================== */}
                  {/* Search */}
                  {/* ============================================================== */}
                  <li className='nav-item search-box'>
                    {' '}
                    {/* <div style={{marginTop: '0px', paddingTop: '0px', textAlign: 'center'}}> */}
                    <a
                      className='nav-link waves-effect waves-light'
                      href='javascript:void(0)'
                      data-toggle='modal'
                      data-target='#exampleModal'
                    >
                      Register Your Organisation
                    </a>
                    {/* </div> */}
                    {/* <div style={{marginTop: '0px', paddingTop: '0px', textAlign: 'center'}}> */}
                    {/* <a
                    className='nav-link waves-effect waves-light'
                    href='javascript:void(0)'
                    data-toggle="modal" data-target="#exampleModal"
                  >
                    Volunteer Form
                  </a>
                    </div> */}
                  </li>
                  {/* ============================================================== */}
                  {/* Volunteer Form Trigger */}
                  {/* ============================================================== */}
                </ul>
                {/* ============================================================== */}
                {/* Right side toggle and nav items */}
                {/* ============================================================== */}
                <ul className='navbar-nav float-right'></ul>
              </div>
            </nav>
          </header>
          {/* ============================================================== */}
          {/* End Topbar header */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}
          <aside className='left-sidebar' data-sidebarbg='skin6'>
            {/* Sidebar scroll*/}
            <div
              className='scroll-sidebar ps-container ps-theme-default ps-active-y'
              data-ps-id='bd2f6030-9e7b-5919-7bb1-cbc041d97ecb'
            >
              {/* Sidebar navigation*/}
              <nav className='sidebar-nav'>
                <ul aria-expanded='false' className='collapse first-level in'>
                  {Category.map((category, index) => {
                    return (
                      <Categories
                        Category={category.category}
                        key={index}
                        index={category.id}
                        change={this.toggle}
                        icons={category.className}
                        category={this.state.category}
                      ></Categories>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>
          <div className='page-wrapper' style={{ display: 'block' }}>
            <div className='page-breadcrumb'>
              <div className='row'>
                <div
                  className='col-12 align-self-center'
                  style={{ textAlign: 'center' }}
                >
                  <h4 className='page-title' style={{ fontSize: '2.2rem' }}>
                    Covid-19 BIZMAP
                  </h4>
                  <div className='d-flex align-items-center'>
                    <nav aria-label='breadcrumb'>
                      <ol className='breadcrumb'>
                        <li className='breadcrumb-item'>
                          {/* <a href='#'>Home</a> */}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div
                  className='col-12 align-self-center'
                  style={{ textAlign: 'center' }}
                >
                  <h6 className='page-title' style={{ fontSize: '1.0rem' }}>
                    An{' '}
                    <img
                      src='/enactus.png'
                      style={{ height: '40px', marginBottom: '12px' }}
                    ></img>{' '}
                    Initiative
                  </h6>
                  <div className='d-flex align-items-center'>
                    <nav aria-label='breadcrumb'>
                      <ol className='breadcrumb'>
                        <li className='breadcrumb-item'>
                          {/* <a href='#'>Home</a> */}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div
                  className='col-12 align-self-center'
                  style={{ textAlign: 'center' }}
                >
                  <div
                    className='d-flex no-block align-items-center'
                    style={{ justifyContent: 'center' }}
                  >
                    <div className>
                      <small
                        style={{
                          fontWeight: 'bold',
                          fontSize: '1.0rem',
                          fontStyle: 'italic'
                        }}
                      >
                        Featuring All COVID-19 Projects and supports in India
                        with their contact details
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='floating-button
             wow fadeIn
            '
              style={{ fontSize: '100' }}
            >
              {/* <Link to='/add_options'> */}
              <button
                type='button'
                data-toggle='modal'
                data-target='#exampleModal'
                className='btn'
                style={{
                  borderRadius: '70%',
                  backgroundColor: '#46b7f5',
                  fontSize: '30px',
                  width: '70px'
                }}
              >
                <i
                  className='fa fa-plus'
                  style={{ color: 'white' }}
                  aria-hidden='true'
                ></i>
              </button>
              {/* </Link> */}
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Container fluid  */}
            {/* ============================================================== */}
            <div className='container-fluid'>
              {/* ============================================================== */}
              {/* Sales chart */}
              {/* ============================================================== */}
              <div className='row'>
                <Graph category={this.state.category}></Graph>
              </div>
              {/* ============================================================== */}
              {/* Sales chart */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Email campaign chart */}
              {/* ============================================================== */}
              <div className='row' style={{ marginTop: '20px' }}>
                <DiscussionForum></DiscussionForum>
                <ActiveCases data={this.state.data}></ActiveCases>
              </div>

              <div className='row'>
                <Twitter></Twitter>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Container fluid  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* footer */}
            {/* ============================================================== */}
            <footer className='footer text-center'>
              Disclamer: The data contained in this website is intended for
              general reference only and is meant for viewers in India only.
            </footer>
            {/* ============================================================== */}
            {/* End footer */}
            {/* ============================================================== */}
          </div>
          {/* ============================================================== */}
          {/* End Page wrapper  */}
          {/* ============================================================== */}
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
