import { fadeInUp } from '../../animations/Animations';

// styles
import {
    PageTitleContainer
} from './PageTitle.styles';

export default function PageTitle({ title, delay = 0 }) {
    return (
        <PageTitleContainer
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={delay * 0.05}
            style={{ width: "100%" }}
        >{
                title}
        </PageTitleContainer>
    )
}
