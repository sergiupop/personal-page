import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const initializeIcons = () => {
  library.add(faFacebook, faLinkedin, faTwitter, faGithub);
}

export default initializeIcons;