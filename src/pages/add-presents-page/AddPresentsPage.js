import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPlayerData } from '../../store/players/players.selector';
import { selectPresentData } from '../../store/presents/presents.selector';
import { setPresents } from '../../store/presents/presents.action';

// styles
import {
    AddPresentsPageContainer,
    ContentContainer,
    PresentImgUploadsContainer,
    PresentItem,
    TextInput,
    BtnContainer
} from './AddPresentsPage.styles';

// assets
import P0_C from '../../assets/present-covers/Gift01.png'
import P1_C from '../../assets/present-covers/Gift02.png'
import P2_C from '../../assets/present-covers/Gift03.png'
import P3_C from '../../assets/present-covers/Gift04.png'
import P4_C from '../../assets/present-covers/Gift05.png'
import P5_C from '../../assets/present-covers/Gift06.png'
import P6_C from '../../assets/present-covers/Gift07.png'
import P7_C from '../../assets/present-covers/Gift08.png'
import P8_C from '../../assets/present-covers/Gift09.png'
import P9_C from '../../assets/present-covers/Gift10.png'
import P10_C from '../../assets/present-covers/Gift11.png'
import P11_C from '../../assets/present-covers/Gift12.png'
import P12_C from '../../assets/present-covers/Gift13.png'
import P13_C from '../../assets/present-covers/Gift14.png'
import P14_C from '../../assets/present-covers/Gift15.png'
import P15_C from '../../assets/present-covers/Gift16.png'
import P16_C from '../../assets/present-covers/Gift17.png'

// components
import Btn from '../../components/btn/Btn';

export default function AddPresentsPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playerData = useSelector(selectPlayerData);
    const presentData = useSelector(selectPresentData);
    const [uploadedPhotos, setUploadedPhotos] = useState([]); // Track uploaded photos
    const [fileNames, setFileNames] = useState([]); // Track file names
    const [titles, setTitles] = useState([]); // Track titles for each present

    const coverImgsArray = [
        P0_C, P1_C, P2_C, P3_C,
        P4_C, P5_C, P6_C, P7_C,
        P8_C, P9_C, P10_C, P11_C,
        P12_C, P13_C, P14_C, P15_C, P16_C
    ]

    useEffect(() => {
        if (presentData?.length > 0) {
            const prepopulatedPhotos = presentData.map((present) => present.presentImg || "");
            const prepopulatedTitles = presentData.map((present) => present.name || "");
            const prepopulatedFileNames = presentData.map((present) => present.fileName || "");
            setUploadedPhotos(prepopulatedPhotos);
            setTitles(prepopulatedTitles);
            setFileNames(prepopulatedFileNames);
        }
    }, [presentData]);

    const handleFileUpload = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file); // Create an object URL for the file
            setUploadedPhotos((prev) => {
                const updatedPhotos = [...prev];
                updatedPhotos[index] = fileURL; // Store the object URL
                return updatedPhotos;
            });
            setFileNames((prev) => {
                const updatedNames = [...prev];
                updatedNames[index] = file.name; // Store the filename
                return updatedNames;
            });
        }
        dispatch(setPresents(presentData))
    };

    const handleTitleChange = (event, index) => {
        const newTitle = event.target.value;
        setTitles((prev) => {
            const updatedTitles = [...prev];
            updatedTitles[index] = newTitle;
            return updatedTitles;
        });
    };

    const handleImgUploadsComplete = () => {
        const presentPhotoData = uploadedPhotos.map((photo, index) => ({
            name: titles[index] || "Untitled Present",
            id: index,
            ownerHistory: [],
            coverImg: coverImgsArray[Math.floor(Math.random() * coverImgsArray.length)], // Random cover image
            presentImg: photo,
            fileName: fileNames[index] || "",
            stealsLeft: 3,
        }));
    
        // Dispatch the data to Redux
        dispatch(setPresents(presentPhotoData));
    
        // Navigate to the next page
        navigate('/shuffle-players');
    };

    const allPhotosUploaded =
        uploadedPhotos.length === playerData.length &&
        uploadedPhotos.every((photo) => photo !== undefined) &&
        titles.length === playerData.length &&
        titles.every((title) => title?.trim() !== "");

    return (
        <AddPresentsPageContainer>
            <h1>Add Presents</h1>
            <ContentContainer>
                <PresentImgUploadsContainer>
                    {playerData.map((_, index) => (
                        <PresentItem key={index}>
                            <label
                                htmlFor={`file-upload-${index}`}
                                className={`custom-file-upload ${fileNames[index] ? "file-uploaded" : ""}`}
                            >
                                {fileNames[index] || "UPLOAD IMG"}
                            </label>
                            <input
                                id={`file-upload-${index}`}
                                type="file"
                                accept="image/*"
                                onChange={(event) => handleFileUpload(event, index)}
                            />
                            <TextInput
                                type="text"
                                placeholder="Enter present title..."
                                value={titles[index] || ""}
                                onChange={(event) => handleTitleChange(event, index)}
                            />
                        </PresentItem>
                    ))}
                </PresentImgUploadsContainer>
                <BtnContainer style={{ display: "flex", gap: "8px" }}>
                    <div onClick={() => navigate('/add-players')} style={{ width: "100%" }}>
                        <Btn label={"BACK"} navTo={'/'} />
                    </div>
                    <div onClick={handleImgUploadsComplete} style={{ width: "100%" }}>
                        <Btn isActive={allPhotosUploaded} label={"DONE"} navTo={'/add-presents'} />
                    </div>
                </BtnContainer>
            </ContentContainer>
        </AddPresentsPageContainer>
    );
}