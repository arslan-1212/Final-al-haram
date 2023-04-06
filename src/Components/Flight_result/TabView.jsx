import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc';
import plan from "../Assets/plan.png"
import IndiGo from "../Assets/IndiGo.png";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='boox' sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="item" label="FLIGHT DETAILS" {...a11yProps(0)} />
          <Tab className="item" label="FARE BREAKUP" {...a11yProps(1)} />
          <Tab className="item" label="BAGGAGE" {...a11yProps(2)} />
          <Tab className="item" label="FARE POLICY"{...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flight_details">
            <div className=" d-flex align-items-center flight_details_roow">
                <div className="col-md-3 px-3">
            <p>21:40 - DELHI - TERMINAL: T3</p>
            </div>
            <div className="colo-md-3 px-3">
            <p className="text-center fs-13">TRAVEL TIME 3H 20M</p>
                        <div className="emg_group_2">
                          {" "}
                          <VscCircleOutline /> <VscCircleFilled />{" "}
                          <VscCircleFilled /> <VscCircleFilled />{" "}
                          <VscCircleFilled /> <img src={plan} alt="" />
                          <VscCircleFilled /> <VscCircleFilled />{" "}
                          <VscCircleFilled /> <VscCircleFilled />
                          <VscCircleOutline />
                        </div>
            </div>
            <div className="col-md-4 px-3">
            <p>23:55 - MECCA - TERMINAL: T2D</p>
            </div>
            </div>
            <div className=" indgo d-flex align-items-center">
                <img src={IndiGo} alt="" />
                <span className='pan_1'>INDIGO</span>
                <span className='pan'>(IN-855)</span>
                <span className='pan'>ECONOMY</span>
                <span className='pan'>454</span>
            </div>
        </div>
      </TabPanel>
      <TabPanel className="fare_panel" value={value} index={1}>
        <div className="fare_breakup">
            <div className="fare_text">
                <h6>FARE BREAKUP SUMMARY</h6>
                <h6>AMOUNT INR</h6>
            </div>
            <div className="fare_amount">
                <span>Basic Amount</span>
                <span>RS 34,575.00</span>
            </div>
            <div className="fare_amount">
                <span>Tax Amount</span>
                <span>RS 34,575.00</span>
            </div>
            <div className="fare_amount">
                <span>Yq Amount</span>
                <span>RS 34,575.00</span>
            </div>
            <div className="fare_amount">
                <span>Gst</span>
                <span>RS 34,575.00</span>
            </div>
            <div className="total_amount fw-800">
                <span>TOTAL AMOUNT</span>
                <span>RS 34,575.00</span>
            </div>
        </div>
      </TabPanel>
      <TabPanel className="baggage_panel" value={value} index={2}>
        <div className="baggage">
        <div className="fare_text">
                <h6>BAGGAGE SUMMARY</h6>
                <h6>DETAILS</h6>
            </div>
            <div className="fare_amount">
                <span>Check In Baggage</span>
                <span>15 Kg (One Piece Only) - Each Adult & Child</span>
            </div>
            <div className="fare_amount">
                <span>Hand BAGGAGE</span>
                <span className='p_6'>7 Kg - Each Adult & Child</span>
            </div>
            <div className="fare_text pt-4">
                <h6>BAGGAGE DISCLAIMER</h6>
            </div>
            <div className="baggage_list">
                <ul>
                    <li className='py-2'>
                   <span className='tital'> Hand Baggage</span><span className='tital_detail'>: Airlines Permits Only One (1pc) Bag Weighing Not More Than 7 KGS. In Addition To The One Piece Of Hand Baggage Permitted, Few Airlines May Permit Customer To Carry One Additional Personal Article Such As Ladies Purse Or A Small Bag Containing Laptop Not Weighing More Than 3 KGS.</span>
                    </li>
                    <li className='py-2'>
                   <span className='tital'> Infant Baggage</span><span className='tital_detail'>: Passenger Traveling With Infant Are Allowed To Carry 1 Pc Of Additional Hand Baggage Not Exceeding 7 KGS.  </span>
                    </li>
                    <li className='pt-2'>
                   <span className='tital_detail'>The Baggage Information Is Just For Reference, Please Check With Airline For More Specific Information. </span>
                    </li>
                </ul>
            </div>
        </div>
      </TabPanel>
      <TabPanel className="policy_panel" value={value} index={3}>
        <div className="policy">
            <div className="polcy_tabel d-flex">
            <div className="col-md-5 tabel_margen">
            <div className="policy_heading">
                <h6>CANCELLATION CHARGES PER TAX</h6>
            </div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col"  colspan="2">TIMELINE</th>
      <th scope="col">PENALTY</th>
    </tr>
  </thead>
  <tbody>
    <tr className='tabel_list'>
      <td colspan="2">0 HOUR - 3 HOUR</td>
      <td className='fee'>NOT REFUNDABLE</td>
    </tr>
    <tr className='tabel_list'>
    <td colspan="2">0 HOUR - 3 HOUR</td>
      <td>RS 3,499.00</td>
    </tr>
    <tr className='tabel_list'>
    <td colspan="2">0 HOUR - 3 HOUR</td>
      <td>RS 2,997.00</td>
    </tr>
  </tbody>
</table>
            </div>

            <div className="col-md-5 tabel_margen">
            <div className="policy_heading">
                <h6>CANCELLATION CHARGES PER TAX</h6>
            </div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col"  colspan="2">TIMELINE</th>
      <th scope="col">PENALTY</th>
    </tr>
  </thead>
  <tbody>
    <tr className='tabel_list'>
      <td colspan="2">0 HOUR - 3 HOUR</td>
      <td className='fee'>NOT REFUNDABLE</td>
    </tr>
    <tr className='tabel_list'>
    <td colspan="2">0 HOUR - 3 HOUR</td>
      <td>RS 3,499.00</td>
    </tr>
    <tr className='tabel_list'>
    <td colspan="2">0 HOUR - 3 HOUR</td>
      <td>RS 2,997.00</td>
    </tr>
  </tbody>
</table>
            </div>

            
            </div>
            <div className="policy_text">
                <p className='policy_line'>HappyFare Fee: ₹ 500 Per Pax</p>
                <div className="policy_d">DISCLAIMER :</div>
                <div className="policy_d_list">
                    <ul>
                        <li>
                            <span className='check_heade'>Check -In</span> <span className='check_deatil'>For All Domestic Flights Closes 45 Minutes Prior To The Scheduled Departure, Failure To Check -In At Least 45 Minutes Prior Will Result In The Fare Being Forfeited.</span>
                        </li>
                        <li>
                            <span className='check_deatil'>If Ticket Fare Is Lower Than Cancellation Penalty Then Basic Fare Plus Fuel Surcharge Will Be Charged As Cancellation Fee, Only Statutory Taxes Will Be Refunded.</span>
                        </li>
                        <li>
                            <span className='check_deatil'>Re-issue Not Advisable If Ticket Fare Is Lower Than Re-issue Charges, Better Cancel And Issue New Ticket.</span>
                        </li>
                        <li>
                            <span className='check_heade'>INFANT -</span> <span className='check_deatil'> No Re-issue & Cancel Fee Applicable For Infant Ticket Except For Air Asia, INFANT TICKETS ARE NON REFUNDABLE ON AIR ASIA,</span>
                        </li>
                        <li>
                            <span className='check_deatil'>Partial Cancellation Is Not Allowed On Tickets Booked Under Special Discounted Round Trip Fares.</span>
                        </li>
                        <li>
                            <span className='check_heade'>No Show Means,</span> <span className='check_deatil'> If A Ticket Is Not Cancelled Within The Stipulated Time.</span>
                        </li>
                        <li>
                            <span className='check_deatil'>Tickets Booked Under Sale / Promo Fare are Non Refundable, Above Cancel/Re-issue Penalty Is Applicable For Refundable Fares Only, For Fares Marked As Non Refundable Only Statutory Taxes Will Be Refunded</span>
                        </li>
                        <li>
                            <span className='check_heade'>Family Fare-</span> <span className='check_deatil'> Cancellation In Respect Of The Booking Made Under Family Fare Shall Only Be Permissible If Minimum Of Four (04) Passengers Are Retained In The Booking.</span>
                        </li>
                        <li>
                            <span className='check_deatil'>ANY AMOUNT PAID TOWARDS SEAT, MEAL, EXTRA BAGGAGE BOOKING IN AIR ASIA ARE NON REFUNDABLE IN CASE OF TICKET CANCELLATION.</span>
                        </li>
                        <li>
                            <span className='check_deatil'>The Above Fare Rules Are Just A Guideline For Your Convenience And Is Subject To Changes By The Airline From Time To Time.</span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
      </TabPanel>
    </Box>
  );
}
