import React from 'react'

const TopnavBar = () => {
    return (
        <div className="row g-3">
        <nav class="navbar navbar-expand-lg">
            
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">My ToDo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewall">View Tasks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/form">New Task</a>
                            </li>
                            <li class="nav-item">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </button>
                                <div class="dropdown">

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/login">LogIn</a></li>
                                        <li><a class="dropdown-item" href="/login">LogOut</a></li>
                                        <li><a class="dropdown-item" href="/signup">SignUp</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            
        </nav>
        </div>
    )
}

export default TopnavBar