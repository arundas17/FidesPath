import FidesFooter from "../Components/FidesFooter/FidesFooter";
import MainNavbar from "../Components/MianNavbar/MainNavbar";
import TopBar from "../Components/Topbar/TopBar";


const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <TopBar/>
      <MainNavbar/>
      <main className="page-content">
        {children}
      </main>
      <FidesFooter />
    </div>
  );
};

export default PageLayout;