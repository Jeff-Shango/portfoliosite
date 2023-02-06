let loader; 
let mobileLoader;

let win = window;
let doc = document;
let docElem = doc.documentElement;
let body = doc.getElementsByTagName('body')[0];
let x = win.innerWidth || docElem.clientWidth || body.clientWidth;
let y = win.innerHeight || docElem.clientHeight || body.clientHeight;
console.log(x + ' x ' + y);

window.onresize = function() {
    console.log('resize');
}

export function checkScreen() {
if (x > 500) {
    function loaderFunction() {
            loader = setTimeout(showPage, 3000);
        }
        
        function showPage() {
            document.getElementById('root').style.display = 'block';
            document.getElementById('loader').style.opacity = '0';
            document.getElementById('loader').style.transition = '.5s';
        }

        loaderFunction();
    } else {
        function mobileLoaderFunction() {
                mobileLoader = setTimeout(showMobilePage, 3000);
            }
            
            function showMobilePage() {
                document.getElementById('root').style.display = 'block';
                document.getElementById('loader').style.display = 'none';
                document.getElementById('defaultCanvas0').style.display = 'block';
                
            }
        mobileLoaderFunction();
    }
}
