import Icons from "../Home/Icons";
import CategoryNav from "./CategoryNav";
import Collapsible from "./Collapsible";
import Images from "./Images";
import PriceDetails from "./PriceDetails";
import Questions from "./Questions";
import SimilarProducts from "./SimilarProducts";

const ProductDetails = () => {

    const desc = (
        <p className="text-xs 876:text-sm text-third-dark">
                Роскошная двухместная кровать для комфортного сна
                Ищете идеальную кровать для комфортного и здорового сна? Наша двухместная кровать - это то, что вам нужно! <br />
                Преимущества нашей кровати:
                Высокое качество материалов: Изготовлена из прочных и долговечных материалов, которые обеспечивают надежность и долговечность.
                Эргономичный дизайн: Специально разработана для максимального комфорта и поддержки вашего тела.
                Стиль и элегантность: Современный и стильный дизайн, который идеально впишется в любой интерьер спальни.
        </p>
    ) 

    const tableProps = (
        <table className="text-xs font-semibold 876:text-sm text-third-dark w-full">
            <tbody className="border w-full">
                <tr className="border-b">
                    <td className="p-2 w-fit xl:w-[25%] border-r truncate">Информация по установке</td>
                    <td className="p-2">Бесплатная установка</td>
                </tr>
                <tr className="border-b">
                    <td className="p-2 w-fit xl:w-[25%] border-r truncate">информация о доставке</td>
                    <td className="p-2">Бесплатная доставка</td>
                </tr>
                <tr className="">
                    <td className="p-2 w-fit xl:w-[25%] border-r truncate">Максимальное время доставки</td>
                    <td className="p-2">26 июня 2024 г. - 3 июля 2024 г.</td>
                </tr>
            </tbody>
        </table>
    )

    const questions = (
        <Questions/>
    )
    

    return ( 
    <>
        <CategoryNav/>
        <div className="container-wrapper py-3 grid grid-cols-4 mb-6 gap-y-5">
            <main className="col-span-4 876:col-span-3 space-y-4">
                <Images/>
            </main>

            <aside className="col-span-4 876:col-span-1 px-3 lg:p-4 xl:p-6">
                <PriceDetails/>
            </aside>

            <div className="col-span-4 876:col-span-3 border my-6">
                <Collapsible
                    title="Описание продукта"
                    collapsesibleSide={desc}
                />
                <Collapsible
                    title="Особенность продукта"
                    collapsesibleSide={tableProps}
                />
                <Collapsible
                    title="Вопрос & ответ"
                    collapsesibleSide={questions}
                    lastComp
                />
            </div>
        </div>
        <Icons/>

        <SimilarProducts/>
        </>
    );
}
 
export default ProductDetails;