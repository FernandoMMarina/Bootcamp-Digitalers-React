import { useSelector } from "react-redux";
import ArticuloComponent from "./ArticuloComponent";
import Footer from "./FooterComponent";

export default function ArticulosComponent(props) {

    const articuloReducer = useSelector(
        (state) => state.articulos
    );
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <div className="row g-2 mt-4">
                            {
                                articuloReducer.articulos.map((articulo, index) => {
                                        return <ArticuloComponent key={index} articulo={articulo}></ArticuloComponent>
                                    }
                                )
                            }
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    )
}
