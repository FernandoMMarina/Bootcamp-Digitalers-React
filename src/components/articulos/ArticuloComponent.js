import { Link } from "react-router-dom";
import { ArticuloAdd } from "./ArticuloAdd";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ArticuloComponent(props) {

    const {articulo} = props;

    return (
        <>
            <div className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xxl-2 text-center">
                <div className="card h-100">
                    <img src={articulo.img} className="card-img-top" alt="ceramica" />
                    <div className="card-body">
                        <Typography color="textSecondary"  variant="h5" gutterBottom>
                            {articulo.titulo}
                         </Typography>
                        <p className="card-text">${articulo.precio}</p>
                        <Link to={`/articulo/detalle/${articulo.id}`}>
                            <Button variant="contained" color="primary">Caracteristicas</Button>
                        </Link>
                    </div>
                    <div className="card-footer">
                        <ArticuloAdd articulo={articulo}></ArticuloAdd>
                    </div>
                </div>
            </div>
        </>
    )
}
