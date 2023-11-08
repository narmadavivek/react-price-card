

import Message from './Message';
import './Message.css';
import './App.css'

function App() {
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      <Message plan="free" price="$0" user="single user" storage="50GB Storage" project="Unlimited public project" access="Community Access" privateproj="unlimited private project" phone="Dedicated phone support" subdomain="Free subdomain" report="Monthly status report" ></Message>
      <Message plan="plus" price="$9" user="5 user" storage="50GB Storage" project="Unlimited public project" access="Community Access" privateproj="unlimited private project" phone="Dedicated phone support" subdomain="Free subdomain" report="Monthly status report"></Message>
      <Message plan="pro" price="$49" user="Unlimited user" storage="50GB Storage" project="Unlimited public project" access="Community Access" privateproj="unlimited private project" phone="Dedicated phone support" subdomain="Free subdomain" report="Monthly status report"></Message>
    </div>
    </div>
</section>
  );
}

export default App;
