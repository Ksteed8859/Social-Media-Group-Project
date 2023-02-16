var myWidget = cloudinary.createUploadWidget({
cloudName: 'dbxgwfodo', 
uploadPreset: 'of5kcle0',
folder: 't-party-photos'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
    console.log('Done! Here is the image info: ', result.info); 
    const photo = 'http://res.cloudinary.com/dbxgwfodo/image/upload/v1676515324/' + result.info.public_id + '.png';
    document.getElementById('uploadPhoto').src = photo;
    }

})

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
}, false);