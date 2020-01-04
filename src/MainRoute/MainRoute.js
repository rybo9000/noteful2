import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Primary from '../Primary/Primary';
import MainSide from '../MainSide/MainSide';
import MainContent from '../MainContent/MainContent';

class MainRoute extends React.Component {
    render() {
        return (
            <>
            <Header />
            <Primary>
                <MainSide folders={this.props.folders}/>
                <MainContent notes={this.props.notes}/>
            </Primary>
            <Footer />
            </>

        )
    }
}

export default MainRoute;