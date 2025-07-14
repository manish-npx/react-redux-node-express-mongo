import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <>
            <section className="bg-home d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <img src="assets/images/404.svg" className="img-fluid" alt='Error404' />
                            <div className="text-uppercase mt-4 display-3">Oh ! no</div>
                            <div className="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                            <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to="../" className="btn btn-outline-primary mt-4">Go Back</Link>
                            <Link to="/" className="btn btn-primary mt-4 ms-2">Go To Home</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Page404