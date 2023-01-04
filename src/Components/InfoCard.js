import React from 'react';

function InfoCard() {
    return (

        <div className='main-body'>
        <h1>Hi, I am Rana Hafez </h1>
        <div className='info-card'>
        <div className="img-container left">
        <img class="circular-img" src={require('../images/portofolio.png')} alt="Profile"/>
        
        <a href="https://icons8.com/icon/EsNDQ88R5bJm/girl" class="img-description img-text">Image from icons8.com.</a>
        </div>
        
            {/* <img className="circular-img" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="Profile"/> */}
        <p><e><strong>Programmer</strong> and <strong>Artist</strong></e></p>
        <p>I am an IT graduate at <a class="link" href="https://www.arabou.edu.sa/Pages/default.aspx"> the university of Arab Open University AOU</a> with a 4.0GPA. I love coding in different pl and different frameworks. I spend my free time self learning. I spend my time with solving leetcode problems and joining programming contests on leetcode. Drawing is my favorite hobby. It is my way of expressing myself. My biggest inspiration for drawing is Anime.</p>

        <div class="contact-me">
          <h3>if you are interested, you can contact me.</h3>
          <p>let's talk about coding and drawing.</p>
          <a class="btn btn-outline-info" href="mailto:ra2017ha1999@gmail.com">CONTACT ME</a>
        </div>
            {/* <p> <e><strong>Programmer</strong> and <strong>Artist</strong></e></p>
                <p>An IT graduate at <a class="link" href="https://www.arabou.edu.sa/Pages/default.aspx">the university of Arab Open University AOU</a> has experience in programming in different programming languages. Possess skills in developing IOS/Android apps using Flutter, programming in python, dart, java and basic HTML and PHP, having enough algorithm and data structure skills. Keen to pursue a career in app development.
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains</p> */}
        
        </div>

        </div>
        
    );
}
export default InfoCard;