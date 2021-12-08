
const GrattingUser = () => {

    const refreshPage = ()=>{
        window.location.reload();
    }

    return (
        <>
            <div className="main_title_1 text-center">
                <h3 className="small">Muchas gracias por responder esta encuesta, gracias a tu participación podremos seguir creciendo y mejorando como entidad.</h3>
                
                <div className="success-checkmark">
                    <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-center">
                <button 
                    type="button" 
                    onClick={refreshPage}
                    name="backward" 
                    className="align-self-stretch backward bg-warning mt-2">
                    Terminar
                </button>
            </div>
            
        </>
    )
}

export default GrattingUser
