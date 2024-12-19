document.addEventListener('DOMContentLoaded', () => {
    const publications = [
        {
            type: 'Journal Papers',
            year: '2024',
            title: 'Comprehensive Earth System Analysis for Advancing Community Resilience',
            authors: 'Sundar, G., Patchaiammal, P., Lakkshmanan, A. et al.',
            journal: 'Remote Sens Earth Syst Sci 7, 788-803',
            doi: '10.1007/s41976-024-00164-6'
        },
        {
            type: 'Journal Papers',
            year: '2024',
            title: 'A Novel Machine Learning based Stroke Prediction System using Magnetic Resonance Imaging and Adaptive New Fuzzy Inference System',
            authors: 'Lakkshmanan, A., Suji R., A., N., P., Anand, D. B., Nagaraju, K., & Naidu, U. G.',
            journal: 'International Journal of Intelligent Systems and Applications in Engineering 12(10s), 576-585',
            doi: 'https://ijisae.org/index.php/IJISAE/article/view/4410 (SCOPUS Indexed)'
        },
        {
            type: 'Journal Papers',
            year: '2023',
            title: 'A Novel Predicting Students Performance Approach to Competency & Hidden Risk Factor Identifier Using Various Machine Learning Classifiers',
            authors: 'Sathya, V., Mahendra Babu, G.R., Ashok, J., Lakkshmanan, Ajanthaa.',
            journal: 'Journal of Intelligent & Fuzzy Systems, Volume 44, Issue 6',
            doi: '10.3233/JIFS-224586'
        },
        {
            type: 'Journal Papers',
            year: '2022',
            title: 'Multi-objective Metaheuristics with Intelligent Deep Learning Model for Pancreatic Tumor Diagnosis',
            authors: 'Lakkshmanan, Ajanthaa, Ananth, C. Anbu, Tiroumalmouroughane, S.',
            journal: 'Journal of Intelligent & Fuzzy Systems, vol. 43, no. 5, pp. 6793-6804',
            doi: '10.3233/JIFS-221171'
        },
        {
            type: 'Journal Papers',
            year: '2022',
            title: 'Highly Precise ANN Classifier for Pancreatic Tumor Recognition with Fuzzy C-means Segmentation',
            authors: 'Lakkshmanan, A., Anbu Ananth, C.',
            journal: 'International Conference on Artificial Intelligence and Sustainable Engineering, Lecture Notes in Electrical Engineering, vol 836',
            doi: '10.1007/978-981-16-8542-2_30'
        },
        {
            type: 'Journal Papers',
            year: '2022',
            title: 'CNN Classification of Computed Tomography Images for Pancreatic Tumor Detection',
            authors: 'Ajanthaa Lakkshmanan, C. Anbu Ananth, S. Tiroumalmouroughane',
            journal: 'International Journal of Image and Graphics (IJIG)',
            doi: '10.1142/S0219467823400016'
        },
        {
            type: 'Journal Papers',
            year: '2021',
            title: 'An Automated Deep Learning Based Pancreatic Tumor Diagnosis and Classification Model Using Computed Tomography Images',
            authors: 'Ajanthaa Lakkshmanan, C. Anbu Ananth, S. Tiroumalmouroughane',
            journal: 'International Journal of Intelligent Computing and Cybernetics, Volume 15, Issue 1',
            doi: '10.1108/IJICC-09-2021-0212'
        },
        {
            type: 'Journal Papers',
            year: '2021',
            title: 'Exploring the Growth Level of Pancreatic Cancer Using Highly Efficient CNN Classifier',
            authors: 'Ajanthaa Lakkshmanan, Dr. C. Anbu Ananth, Dr. S. Tiroumalmouroughane',
            journal: 'Turkish Journal of Computer and Mathematics Education, Vol. 12 No. 10',
            pages: '3957-3970'
        },
        {
            type: 'Journal Papers',
            year: '2020',
            title: 'Inclusive Exposure on Detection of Pancreatic Cancer – A Review',
            authors: 'Ajanthaa Lakkshmanan, Dr. C. Anbuananth',
            journal: 'High Technology Letters, Volume 26, Issue 7',
            doi: '10.37896/HTL26.07/1391'
        },
        {
            type: 'Journal Papers',
            year: '2020',
            title: 'A Glance Journey on Research Approaches in Identification of Cancer',
            authors: 'Ajanthaa Lakkshmanan, Dr. C. Anbuananth',
            journal: 'Journal of Xidian University, Volume 14, Issue 5',
            pages: '2124-2129'
        },
        {
            type: 'Journal Papers',
            year: '2014',
            title: 'Building a Robust Software Based Router',
            authors: 'Ajanthaa Lakkshmanan, E. Aruna, S. Abirami Shri',
            journal: 'Smart Innovation, Systems and Technologies',
            pages: '181–188',
            doi: '10.1007/978-3-319-07350-7_20'
        },
        {
            type: 'Journal Papers',
            year: '2014',
            title: 'Image Segmentation and Recognition',
            authors: 'Abirami Shri, E. Aruna, Ajanthaa Lakkshmanan',
            journal: 'International Journal of Computer Applications (IJCA), NCFC 2014(2)',
            pages: '6-10'
        },
        {
            type: 'Journal Papers',
            year: '2013',
            title: 'Spontaneous Identification of Individual Nick Name from Web',
            authors: 'Prof. Ajanthaa Lakkshmanan',
            journal: 'International Journal of Computer Science and Engineering Technology (IJCSET), Volume 4, No. 06',
            pages: '675-679'
        },
        {
            type: 'Journal Papers',
            year: '2013',
            title: 'Managing the Buffer Occupancy in Multi-Input-Multi-Output Network Systems Using SAAP Approach',
            authors: 'K. Ashwin Kumar, M. Praveen Kumar Reddy, K. Srinivasulu, Ajanthaa Lakkshmanan',
            journal: 'International Journal of Advanced Research in Computer Science and Software Engineering (IJARCSSE), Volume 3, Issue 5',
            pages: '179-184'
        },
        {
            type: 'Journal Papers',
            year: '2013',
            title: 'An Adaptive Image Steganography Technique Using LSB and MSB',
            authors: 'Ajanthaa Lakkshmanan, Puja U. Dharia, Fairy Gandhi',
            journal: 'IARS’ International Research Journal (IRJ.IARS), Vol. 3, No. 1',
            doi: 'ISSN 1839-6518'
        },
        {
            type: 'Journal Papers',
            title: 'An Enhancement of Dynamic Source Routing by Efficient Load Balancing in Wireless Ad Hoc Networks',
            authors: 'Kumar, P.K Reddy, Srinivasalu, Ajanthaa Lakkshmanan',
            journal: 'International Journal of Applied Engineering Research',
            doi: '10.37622/000000',
        },
        {
            type: 'Conference Papers',
            year: '2024',
            title: 'Integrated Women\'s Security System with Safe Route Navigation and Instant Law Enforcement Reporting',
            authors: 'D. V. Kumar Reddy, A. Lakkshmanan and S. G. Sohan',
            conference: 'Third International Conference on Intelligent Techniques in Control, Optimization and Signal Processing (INCOS)',
            location: 'Krishnankoil, Tamil Nadu, India',
            doi: '10.1109/INCOS59338.2024.10527644'
        },
        {
            type: 'Conference Papers',
            year: '2024',
            title: 'Early Detection of Dementia Disease using Machine Learning',
            authors: 'Nandan G., Lakkshmanan A., Reddy M.T.A.',
            conference: '7th International Conference on Inventive Computation Technologies (ICICT)',
            doi: '10.1109/ICICT60155.2024.10544484',
            pages: '163-168'
        },
        {
            type: 'Conference Papers',
            year: '2023',
            title: 'An Efficient 3D Model for early prediction of Breast Cancer based on hybrid ANN-Fuzzy Model through Lossless Medical MR Images',
            conference: '5th International Conference on Inventive Research in Computing Applications (ICIRCA)',
            pages: '351-355',
            index: 'Scopus Indexed'
        },
        {
            type: 'Conference Papers',
            year: '2023',
            title: 'Detection of Retinopathy of Prematurity using ResNet Based Deep Features and Support Vector Machine Classifier',
            conference: '2nd International Conference on Augmented Intelligence and Sustainable Systems (ICAISS)',
            pages: '1020-1027',
            index: 'Scopus Indexed'
        },
        {
            type: 'Conference Papers',
            year: '2021',
            title: 'Highly Precise ANN Classifier for Pancreatic Tumor Recognition with Fuzzy C-Means Segmentation',
            conference: 'International Conference on Artificial Intelligence and Sustainable Engineering (AISE-2021)',
            index: 'Scopus Indexed'
        },
        {
            type: 'Conference Papers',
            year: '2013',
            title: 'Pattern Classification for finding facial growth abnormalities',
            authors: 'Ajanthaa Lakkshmanan, E. Aruna, A. Abirami Shri',
            conference: 'Computational Intelligence and Computing Research (ICCIC)',
            isbn: '978-1-4799-1594-1',
            pages: '1-5',
            index: 'WOS Indexed'
        },
        {
            type: 'Conference Papers',
            year: '2013',
            title: 'An enhancement of dynamic source routing by efficient load balancing in wireless Ad Hoc networks',
            authors: 'Aswin Kumar, Ajanthaa Lakkshmanan',
            conference: 'Computational Intelligence and Computing Research (ICCIC)',
            doi: '10.1109/ICCIC.2013.6724123',
            index: 'WOS Indexed'
        },
        {
            type: 'Conference Papers',
            year: '2013',
            title: 'Security Concerns and risk at different levels in Cloud Computing',
            authors: 'E. Aruna, A. Abirami Shri, Ajanthaa Lakkshmanan',
            conference: 'Green Computing Communication and Conservation of Energy (ICGCE)',
            pages: '743-746',
            index: 'WOS Indexed'
        },
        {
            type: 'Conference Papers',
            year: '2019',
            title: 'A Glimpse, Journey on Detection of Pancreatic Cancer',
            conference: 'International Conference on Intellectual Research in Engineering, Science and Management (ICIRESM)',
            date: 'April 26, 2019'
        },
        {
            type: 'Conference Papers',
            year: '2019',
            title: 'Comprehensive Coverage on Detection of Pancreatic Cancer – A Review',
            conference: 'International Conference on Advances in Computing and Information Technology (ICACIT \'19)',
            date: 'September 24-25, 2019'
        },
        {
            type: 'Conference Papers',
            year: '2011',
            title: 'Pattern Classification for Finding Facial Abnormalities',
            conference: 'International Conference on Futuristic Trends in Computer Science Engg. & Information Tech'
        },
        {
            type: 'Conference Papers',
            year: '2014',
            title: 'Article: Image Segmentation and Recognition',
            conference: 'IJCA Proceedings on National Conference on Future Computing (NCFC)',
            pages: '6-10',
            date: 'January 2014'
        },
        {
            type: 'Conference Papers',
            year: '2014',
            title: 'Building a Robust Software based Router',
            conference: 'Second International Conference on Advanced Computing, Networking and Informatics',
            date: 'June 24-26, 2014'
        },

        // Books/Chapters
        {
            type: 'Book/Chapter',
            year: '2024',
            title: 'Engineering Applications of Artificial Intelligence',
            authors: 'Lakkshmanan, A., Seranmadevi, R., Sree, P. H., & Tyagi, A. K.',
            book: 'Enhancing Medical Imaging with Emerging Technologies',
            publisher: 'IGI Global',
            pages: '166-179',
            doi: '10.4018/979-8-3693-5261-8.ch010'
        },
        {
            type: 'Book/Chapter',
            year: '2024',
            title: 'Further research opportunities and challenges towards AI-driven tools for modern generation',
            authors: 'Lakkshmanan, A., Amudhan, S., Gaikwad, S.M., Tyagi, A.K.',
            book: 'Impacts of Generative AI on Creativity in Higher Education',
            pages: '69–100'
        },
        {
            type: 'Book/Chapter',
            year: '2022',
            title: 'Efficient Data Verification Systems for Privacy Networks',
            authors: 'Vinoth Kumar.V, Muthukumaran V, Rajalakshmi V, Ajanthaa Lakkshmanan, Venkatasubramnian S, Mohan E',
            book: 'Handbook of Research on Technologies and Systems for E-Collaboration during Global Crises',
            publisher: 'IGI Global',
            pages: '143-158',
            doi: '10.4018/978-1-7998-9640-1'
        },
        {
            type: 'Book/Chapter',
            year: '2021',
            title: 'Introduction to Cloud Computing',
            authors: 'Dr.E. Mohan, Ajanthaa Lakkshmanan, D. Devi, R. Mathumitha',
            isbn: '978-93-5636-355-7'
        }
    ];

    const publicationsGrid = document.getElementById('publications-grid');
    const searchInput = document.getElementById('publication-search');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';
    let searchQuery = '';
    let visibleCount = 1; 

    function createPublicationCard(pub, index) {
        const card = document.createElement('div');
        card.className = 'publication-card opacity-0';
        card.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 h-full">
                <div class="flex flex-col h-full">
                    <div class="text-xs text-blue-500 font-semibold mb-2">${pub.year} • ${pub.type}</div>
                    <h3 class="text-lg font-semibold text-blue-900 mb-3">${pub.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${pub.authors}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-xs text-blue-600">DOI: ${pub.doi || 'N/A'}</span>
                        ${pub.doi ? `
                            <a href="https://doi.org/${pub.doi}" 
                               target="_blank" 
                               rel="noopener"
                               class="text-blue-500 hover:text-blue-700 transition-colors">
                                View Paper →
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    
        return card;
    }
    
    function filterPublications() {
        if (!publicationsGrid) return;
    
        const filteredPubs = publications.filter(pub => {
            const matchesFilter = currentFilter === 'all' || pub.type === currentFilter;
            
            const searchString = [
                pub.title,
                pub.authors,
                pub.journal,
                pub.conference,
                pub.book,
                pub.year
            ].filter(Boolean).join(' ').toLowerCase();
            
            const matchesSearch = searchString.includes(searchQuery.toLowerCase());
            
            return matchesFilter && matchesSearch;
        });
    
        gsap.to('#publications-grid > *', {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.05,
            onComplete: () => {
                publicationsGrid.innerHTML = '';
                
                filteredPubs.slice(0, visibleCount).forEach((pub, index) => {
                    const card = createPublicationCard(pub, index);
                    publicationsGrid.appendChild(card);
                    
                    gsap.fromTo(card, 
                        { opacity: 0, y: 20 },
                        { 
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: "power2.out"
                        }
                    );
                });
    
                const existingLoadMore = document.querySelector('.load-more-container');
                if (existingLoadMore) {
                    existingLoadMore.remove();
                }
    
                if (filteredPubs.length > visibleCount) {
                    const loadMoreContainer = document.createElement('div');
                    loadMoreContainer.className = 'load-more-container text-center mt-8';
                    loadMoreContainer.innerHTML = `
                        <button class="load-more-btn bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Load More Publications
                        </button>
                    `;
                    
                    loadMoreContainer.querySelector('.load-more-btn').addEventListener('click', () => {
                        visibleCount += 5;
                        filterPublications();
                    });
                    
                    publicationsGrid.after(loadMoreContainer);
                }
            }
        });
    
        const noResultsElement = document.getElementById('no-results');
        if (noResultsElement) {
            noResultsElement.style.display = filteredPubs.length === 0 ? 'block' : 'none';
        }
    }

    // Event Listeners
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-blue-500', 'text-white');
                    b.classList.add('bg-blue-100', 'text-blue-800');
                });
                btn.classList.add('active', 'bg-blue-500', 'text-white');
                btn.classList.remove('bg-blue-100', 'text-blue-800');

                currentFilter = btn.getAttribute('data-filter');
                visibleCount = 1;
                filterPublications();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            visibleCount = 1;
            filterPublications();
        });
    }
    setTimeout(filterPublications, 100);
});