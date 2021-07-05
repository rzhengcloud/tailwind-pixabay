import React from 'react';

const ImageCard = ({image2}) => {
    const tags = image2.tags.split(',');

    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image2.webformatURL} alt=""
        className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image2.user}
            </div>
            <ul>
            <li>
                <strong>Views: </strong>
                {image2.views}
            </li>
            <li>
                <strong>Downloads: </strong>
                {image2.downloads}
            </li>
            <li>
                <strong>Likes: </strong>
                {image2.likes}
            </li>
            </ul>
        </div>
        <div className="px-6 y-4">
            {tags.map((tag,index) => (
                <span key={index} className="inline-block.bg-gray-200.rounded-full.px-3.py-1.text-sm.font-semibold.text-gray-700 mr-2">#{tag}</span>
            ))}          
        </div>
    </div>
    )
}

export default ImageCard;
