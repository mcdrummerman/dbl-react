import React from 'react';

interface FailureItem {
    order?: number,
    title: string;
    date?: string,
    description: string;
    imageUrl?: string;
    links?: { text: string; url: string }[];
    alternatives: string[];
}

const JohnstonFailures: React.FC = () => {
    const failures: FailureItem[] = [
        {
            title: "West 29th Ave",
            date: 'date',
            description: "Director Ford decided to take a private meeting with residents along 29th. After the project had reached finale design she decided to alter it citing \"community feedback\". ",
            imageUrl: "https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.webp?s=2048x2048&w=is&k=20&c=qhjE8YB8_eArO8-WJyDV_-QjFHZXwt_8Vsxn8dCMgOs=",
            links: [
                { text: "News Article", url: "#" },
                { text: "Official Statement", url: "#" }
            ],
            alternatives: [
                "Step 1: What Johnston could have done instead",
                "Step 2: Another alternative action",
                "Step 3: A better approach to the problem",
                "Step 4: Long-term solution that addresses root cause"
            ]
        },
        {

            title: "Example Failure 2",
            date: '',
            description: "Description of what happened and why it was a failure.",
            imageUrl: "https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.webp?s=2048x2048&w=is&k=20&c=qhjE8YB8_eArO8-WJyDV_-QjFHZXwt_8Vsxn8dCMgOs=",
            links: [
                { text: "News Article", url: "#" },
                { text: "Official Statement", url: "#" }
            ],
            alternatives: [
                "asdf",
                "Step 2: Another alternative action",
                "Step 3: A better approach to the problem",
                "Step 4: Long-term solution that addresses root cause"
            ]
        }


    ];

    failures.sort((a: FailureItem, b: FailureItem) => {
        if (a.order && b.order) {
            return a.order - b.order
        }
        else { return 0; }
    })


    return (
        <main role="main" className="johnston-failures-page">
            <div className="container johnston-failures-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="johnston-failures-title">Mayor Johnston and Executive Director Amy Ford Failure Tracker</h2>
                    </div>
                </div>

                {failures.map((failure, index) => (
                    <div key={index} className="failure-item row mb-5">
                        <div className="col-md-6 failure-content">
                            <h3 className="failure-item-title">{failure.title}</h3>

                            {failure.date && <h6 className="failure-item-date">{failure.date}</h6>}
                            
                            <p className="failure-description">{failure.description}</p>

                            {failure.imageUrl && (
                                <div className="failure-image-container">
                                    <img src={failure.imageUrl} alt={failure.title} className="failure-image" />
                                </div>
                            )}

                            {failure.links && failure.links.length > 0 && (
                                <div className="failure-links">
                                    <h5>Related Links:</h5>
                                    <ul>
                                        {failure.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                    {link.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="col-md-6 failure-alternatives">
                            <h4 className="alternatives-title">What Johnston Could Have Done Instead:</h4>
                            <ol className="alternatives-list">
                                {failure.alternatives.map((alternative, altIndex) => (
                                    <li key={altIndex} className="alternative-item">{alternative}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default JohnstonFailures;
