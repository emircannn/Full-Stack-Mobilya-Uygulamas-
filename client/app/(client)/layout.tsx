import BottomNav from "@/components/Layout/BottomNav";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import HeaderTexts from "@/components/Layout/HeaderTexts";
import LoginModal from "@/components/modals/LoginModal";
import QuestionModal from "@/components/modals/QuestionModal";
import RegisterModal from "@/components/modals/RegisterModal";

export default function ClientLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <HeaderTexts/>
        <Header/>
          <QuestionModal/>
          <RegisterModal/>
          <LoginModal/>
        <div className="w-full 876:!min-h-[calc(100vh_-_398.25px)] overflow-x-hidden hideScrollRes">
        {children}
        </div>
        <Footer/>
        <BottomNav/>
        </>
    )
  }