import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import Bottombar from "./components/BottomBar";
import EmailList from "./components/EmailList";
import EmailContent from "./components/EmailContent";

function App() {
  const [openEmail, setOpenEmail] = useState(null);

  return (
    <>
      <Header />
      <Container>
        <div className="relative flex flex-col h-full gap-2 md:flex-row xl:gap-4">
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail} />
          {openEmail && (
            <EmailContent email={openEmail} setOpenEmail={setOpenEmail} />
          )}
          <Bottombar />
        </div>
      </Container>
    </>
  );
}

export default App;
