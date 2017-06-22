# jquery-text-resizer

## Usage

JTR is meant for client side applications. You can include the file however you like, as long as jquery loads before it.

Use the module as such:


    var elementsToAutoResize = [
        { e: '#element1', s: 24 },
        { e: '#element2', s: 18 }
    ];
    jtr(elementsToAutoResize);


Your elements will now automatically resize their text based on window size. The algorithm is simple, if the width of the window is larger than the height:


    <scale factor, s> * <magic number .005> * <window height>^2 / <window width>


or, if the width is less than or equal to the height:


    <scale factor, s> * <magic number .005> * <window width>


## Moving forward

I made a version that doesn't require jquery: http://github.com/Candeles/native-text-resizer
