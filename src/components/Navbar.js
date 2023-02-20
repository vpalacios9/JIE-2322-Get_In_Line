
export default function Navbar(props){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Get In Line</a>
            <div class="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5">
                            <a class="nav-link" href="#">My Queues <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item mr-5">
                            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Log Out</button>
                        </li>
                    </ul>
                </form>
            </div>
            </nav>
        )
}