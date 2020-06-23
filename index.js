import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');



// // Form event listener
// searchForm.addEventListener('onload', e => {
//     // Get search term
//     const searchTerm = searchInput.value;
//     // Get sort
//     const sortBy = document.querySelector('input[name="sortby"]:checked').value;
//     // Get limit
//     const searchLimit = document.getElementById('limit').value;
//     // Check input
//     if (searchTerm === '') {
//         showMessage('Please add a search term', 'alert-danger');
//     }
//     // Clear input
//     searchInput.value = '';

//     // Search reddit
//     reddit.search(searchTerm, searchLimit, sortBy)
//         .then(results => {
//             console.log(results)
//             let output = '<div class="row">';
//             // Loop through
//             results.forEach(post => {
//                 // Check for image
//                 const image = post.preview ? post.preview.images[0].source.url : 'https://www.medela.com/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/stage/desktop/1400_788.jpg/jcr:content/1400_788.jpg';
//                 output += `
//                 <div class="col-sm-4">
//                <div class="card">
//                 <img src="${image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${post.title}</h5>
//                     <p class="card-text">${truncateText(post.selftext,100)}</p>
//                     <a href="${post.url}" target='_blank' class="btn btn-primary">Read More</a>
//                 </div>
//                 </div>
//                 </div>
//                `;
//             })
//             output += '</div> ';
//             document.getElementById('results').innerHTML = output;
//         });


//     e.preventDefault();
// });
 //  <p class="card-text">${truncateText(post.selftext,100)}</p>
 // Search reddit
 reddit.search()
 .then(results => {
     console.log(results)
     let output = '<div class="row">';
     // Loop through
     results.slice(2).forEach(post => {
         // Check for image
         const image = post.preview ? post.preview.images[0].source.url : 'https://www.medela.com/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/stage/desktop/1400_788.jpg/jcr:content/1400_788.jpg';
         output += `
         <div class="col-lg-6 col-md-6 mb-4">
        <div class="card">
         <img src="${image}" class="card-img-top" alt="..." style ="max-height: 285px;">
         <div class="card-body">
             <h5 class="card-title" style ="height: 96px;">${truncateText(post.title, 200)}</h5>
            
             <a href="${post.url}" target='_blank' class="btn btn-primary">Read More</a>
         </div>
         </div>
         </div>
        `;
     })
     output += '</div> ';
     document.getElementById('results').innerHTML = output;
 });

// //Show message
// function showMessage(message, className) {
//     const div = document.createElement('div');
//     //add classes
//     div.className = `alert ${className}`;
//     // Add text
//     div.appendChild(document.createTextNode(message));
//     //Get parent
//     const searchContainer = document.getElementById('search-container');
//     // Get search
//     const search = document.getElementById('search');

//     // Insert message
//     searchContainer.insertBefore(div, search);

//     // Time out alert
//     setTimeout(() => document.querySelector('.alert').remove(), 3000);
// };

// Truncate text

function truncateText(text, limit) {
    const shortened = text.indexOf('', limit);
    if (shortened === -1) return text;
    return text.substring(0, shortened);


}