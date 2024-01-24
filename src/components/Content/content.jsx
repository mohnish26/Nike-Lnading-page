import './content.css'
function Content() {
    return (
        <main className="main">
            <div className="main-content">
                <h2>YOUR FEET
                    DESERVE
                    THE BEST
                </h2>
                <p className='p-content'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU 
                    WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE 
                    TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='btn'>
                    <button>Shop Now</button>
                    <button className='cat-btn'>Category</button>
                </div>
                <p>Also Available on</p>
                <div className='ecom'>
                    <img src="/images/flipkart.png" alt="flipkart" />
                    <img src="/images/amazon.png" alt="flipkart" />

                </div>
            

            </div>
            <div className="content-image">
                <img src="/images/shoe_image.png" alt="shoe-image" />

            </div>
        </main>


    );
} export default Content;