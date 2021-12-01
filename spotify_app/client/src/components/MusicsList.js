import React from 'react';

const Musics = ({ musics }) => {
    return(
        <>
            <React.Fragment>
                {Object.keys(musics).length > 0 && (
                    <div className = "musics" >
                        {musics.items.map((music, index) => {
                            return(
                                <React.Fragment key = {index}>
                                    <div>
                                        {music.name}
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                )}
            </React.Fragment>
        </>

    )
}

export default Musics;