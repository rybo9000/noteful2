import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Primary from '../Primary/Primary';
import DynamicNoteSide from '../DynamicNoteSide/DynamicNoteSide';
import DynamicNoteContent from '../DynamicNoteContent/DynamicNoteContent';

class DynamicNoteRoute extends React.Component {
    render() {
        return (
            <>
            <Header />
            <Primary>
                <DynamicNoteSide />
                <DynamicNoteContent />
            </Primary>
            <Footer />
            </>

        )
    }
}

export default DynamicNoteRoute;