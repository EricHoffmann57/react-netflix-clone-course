import * as React from 'react'
import {Suspense} from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Row from '../Row/row';
import TopButton from '../TopButton/topbutton';
import Banner from '../Banner/banner';
import { randomMovieURL, movieURLS } from '../../App';
import List from '../List/list';

const TVShows: React.FC<State> = ({user, setUser, movie, setMovie}) => {
    return (
        <>
        <Header user={user} setUser={setUser} />
        <TopButton />
        <Suspense fallback={<>Banner Loading</>}>
            <Banner user={user} setUser={setUser} fetchMovie={randomMovieURL} movie={movie} setMovie={setMovie} />
        </Suspense>
        <main className="content tvShows multiple">
            <div className="inner">
                <div className="initial">
                    <div className={user?.list?.length === 0 ? `row pageTitleRow noMovie` : `row pageTitleRow`}>
                        <h3 className={`cHeader`}>TV Shows</h3>
                        <span className="rowTotal">60 Items Total</span>
                        {/* <span className="rowTotal">{document.querySelectorAll(`.topicRow .movieElement`)?.length} Items</span> */}
                    </div>
                    <List user={user} setUser={setUser} />
                    <Suspense fallback={<div className="skeleton movie"><img className="icon" src="/public/assets/netflixIcon.png" alt="icon" /></div>}>
                        <Row title="Netflix Originals" movieURL={movieURLS.netflixOriginals} user={user} setUser={setUser} />
                    </Suspense>
                    <Suspense fallback={<div className="skeleton movie"><img className="icon" src="/public/assets/netflixIcon.png" alt="icon" /></div>}>
                        <Row title="Docuseries" movieURL={movieURLS.documentaries} user={user} setUser={setUser} />
                    </Suspense>
                    <Suspense fallback={<div className="skeleton movie"><img className="icon" src="/public/assets/netflixIcon.png" alt="icon" /></div>}>
                        <Row title="Trending" movieURL={movieURLS.trending} user={user} setUser={setUser} />
                    </Suspense>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}   

export default TVShows
