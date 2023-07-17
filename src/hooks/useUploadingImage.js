import { useEffect, useState } from 'react';

const useUploadingImage = (imgFile) => {

    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {

        if (imgFile) {
            const formData = new FormData()

            formData.append("image", imgFile);

            console.log(imgFile);

            fetch(`https://api.imgbb.com/1/upload?key=32373295ed5043f07ad05f68f15007ab`,
                {
                    method: "POST",
                    body: formData,
                }
            )
                .then((res) => res.json())
                .then((imgData) => {
                    console.log(imgData?.data?.url);
                    setImgUrl(imgData?.data?.url);
                });
        }


    }, [imgFile]);

    return { imgUrl };

};

export default useUploadingImage;