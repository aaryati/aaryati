import { Route, Switch } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatbotButton from "@/components/ui/ChatbotButton";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import MulesoftConversion from "@/pages/Platform/MulesoftConversion";
import Enterprise from "@/pages/Solutions/Enterprise";
import FinancialServices from "@/pages/Solutions/FinancialServices";
import Resources from "@/pages/Resources";
import Company from "@/pages/Company";
import ContactUs from "@/pages/ContactUs";
import RequestDemo from "@/pages/RequestDemo";
import MuleAnalyzer from '@/pages/MuleAnalyzer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/platform/mulesoft-to-springboot-conversion" component={MulesoftConversion} />
          <Route path="/solutions/enterprise" component={Enterprise} />
          <Route path="/solutions/financial-services" component={FinancialServices} />
          <Route path="/resources" component={Resources} />
          <Route path="/company" component={Company} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/request-demo" component={RequestDemo} />
          <Route path="/mule-to-springboot-converter-api-analyzer" component={MuleAnalyzer} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ChatbotButton />
    </>
  );
}

export default App;