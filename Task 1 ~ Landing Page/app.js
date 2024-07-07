// This is a feature that I will implement later in life LOL basically when elements are not
// within the user's view (screen) then they are hidden, once the view comes into contact,
// they animate in from the left or right

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting)
            {
                entry.target.classList.add('show');
            }   else{
                entry.target.classList.remove('show');
            }
    });
});
const hiddenElements = document.querySelectorAll('.ImageGallery');
hiddenElements.forEach((el)=> observer.observe(el));

let lightmode = localStorage.getItem('lightMode')
const About = document.getElementById('About');
const Contact = document.getElementById('Contact');
const theme = document.getElementById('theme');
const AI = document.getElementById('AI');
const Car = document.getElementById('Car');
const Phone = document.getElementById('Phone');
const Flower = document.getElementById('Flower');
const Content = document.getElementById('Content');
const ImageGallery = document.getElementById('ImageGallery')
theme.onclick = function() 
{
    document.body.classList.toggle("lightMode");
    if(document.body.classList.contains("lightMode")) //Light mode is toggled by the addition or deletion of this code section on the body section//
        {
            About.style.background="linear-gradient(gray,black)";
            Contact.style.background="linear-gradient(gray,black)";
            document.getElementsByTagName('body')[0].style.backgroundImage = "linear-gradient(white,gray,white)";
            ImageGallery.style.background = "linear-gradient(white,gray)";
        }
        else
        {
            About.style.background="linear-gradient(black,hsla(0, 0%, 0%, 0.527))";
            Contact.style.background="linear-gradient(black,hsla(0, 0%, 0%, 0.527))";
            document.getElementsByTagName('body')[0].style.backgroundImage = "linear-gradient(grey,black)";
            ImageGallery.style.background = "linear-gradient(to right, black,hsla(0, 0%, 0%, 0.527))";
        }
}
//These functions basically change the background image and content of the article section //
AI.onclick = function()
{
    Content.style.background="url('Images/AI.jpg') center center / cover";
    Content.textContent = "Humans continue to be valued in the job market over AI for several compelling reasons." +
                 "Despite advancements in artificial intelligence, human creativity remains unmatched in innovation, problem-solving, and strategic thinking."+
                 "Humans bring a depth of emotional intelligence and empathy that fosters meaningful relationships, customer satisfaction, and team dynamics, which are crucial in service-oriented industries and leadership roles."+
                "Additionally, humans possess adaptability and intuition, allowing them to navigate unpredictable situations and make ethical decisions that consider broader societal impacts."+
                 "Furthermore, human communication skills, including nuanced language understanding and cultural sensitivity, enable effective collaboration and negotiation."+
                 "In essence, while AI excels in processing data and performing routine tasks, the uniquely human abilities of creativity, emotional intelligence, adaptability, and communication ensure our continued relevance and value in the evolving job market.";
}
Car.onclick = function()
{
    Content.style.background="url('Images/Car.jpg') center center / cover";
    Content.textContent ="Embarking on a speedy road to success can yield rapid achievements and notable rewards. By swiftly climbing the ladder of success, individuals often enjoy early recognition, financial gains, and a sense of accomplishment. Moreover, quick success can open doors to further opportunities and build a strong professional reputation in a shorter time frame. However, this path can also present challenges such as increased pressure to maintain momentum, potential burnout from intense workloads, and a higher risk of overlooking crucial learning experiences that come with gradual growth. Balancing speed with sustainability is key to navigating this journey effectively, ensuring that achievements are built on a solid foundation for long-term success."
}
Phone.onclick = function()
{
    Content.style.background="url('Images/Phone.jpg') center center / cover";
    Content.textContent = "The digital divide exacerbates the phenomenon of Monteray multiplication between the wealthy and poor, creating stark disparities in access to technology and its benefits. As affluent individuals and communities embrace advanced digital tools and opportunities, they can multiply their wealth and influence through enhanced connectivity, education, and business ventures. Meanwhile, those on the impoverished side of the digital divide face barriers to acquiring digital skills, accessing online resources, and participating in the digital economy, widening the wealth gap. Bridging this divide is crucial for equitable societal progress, ensuring that all individuals have fair opportunities to leverage digital advancements for personal and economic advancement.";
}
Flower.onclick = function()
{
    Content.style.background="url('Images/flower.jpg') center center / cover";
    Content.textContent="Attracting people by building your social image involves crafting a compelling persona that resonates with others on various levels. It requires authenticity, consistency, and the ability to convey positive traits such as confidence, reliability, and empathy. A strong social image not only draws people to you but also fosters trust and admiration, making it easier to connect, collaborate, and influence others positively. However, it's essential to maintain integrity and avoid projecting an overly curated or superficial image that may eventually erode trust. Ultimately, nurturing a genuine and engaging social image can lead to meaningful relationships, opportunities for growth, and a solid reputation within your community or industry.";
}