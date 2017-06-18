# jquery-text-resizer

## Usage

JTR is meant for client side applications. You can include the file however you like, as long as jquery loads before it.

Use the module as such:


    var elementsToAutoResize = [
        { e: '#element1', s: 24 },
        { e: '#element2', s: 18 }
    ];
    jtr(elementsToAutoResize);


Your elements will now automatically resize their text based on window size. The algorithm is simple, either:


    <scale factor, s> * <magic number .005> * <window height> / <window width>


or


    <scale factor, s> * <magic number .005> * <window width> / <window height>


depending on whether the width or the height is largest.


## Moving forward

I might try to make a version that doesn't require jquery.
