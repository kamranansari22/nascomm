import React, { useState } from 'react'


function Tabs() {

    const tabs_rdf = {
        backgroundColor: "#F5f4fa",
        padding: "50px 0px"
    };

    const [active, setActive] = useState(true);

    function handleChange() {
        setActive(!active)
    }


    return (
        <>
            <h1>This is a tab pane</h1>
            <div className="tabs-rdf" style={tabs_rdf}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="sub-header ">
                            <div className="swipe-tabs">
                                <div className="swipe-tab" onClick={handleChange} >Tab1</div>
                                <div className="swipe-tab" onClick={handleChange}>Law Enforcement Segment</div>
                                <div className="swipe-tab" onClick={handleChange}>Product Segment</div>
                                <div className="swipe-tab" onClick={handleChange}>Awards Proces</div>
                                <div className="swipe-tab" onClick={handleChange}>Why Nominate?</div>
                                <div className="swipe-tab" onClick={handleChange}>Important Dates</div>
                                <div className="swipe-tab" onClick={handleChange}>Nomination FAQ</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="main-container">
                            <div className="swipe-tabs-container ">
                                {active ?
                                    <div className="swipe-tab-content">

                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor vehicula, tincidunt nisi eu, mattis orci. Quisque elementum scelerisque nisi, et ultrices nisl egestas et. Ut viverra ante at lorem fringilla, porttitor fermentum lorem mollis. Nulla id odio enim. Fusce tortor felis, commodo id egestas eu, tristique sit amet tortor. Maecenas id mi vitae dui blandit bibendum eu sit amet nibh. Donec ut elit urna. Maecenas sit amet egestas sem. In non nisl commodo tellus finibus finibus. Vestibulum condimentum semper aliquam. Vivamus consequat ante nec leo hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed porta metus. Nulla id est posuere, consectetur quam et, fringilla velit. Donec nibh tellus, pellentesque at enim non, commodo mollis nibh. Nam pretium luctus lectus, aliquet semper ante dapibus sit amet.</p>

                                        <p> Morbi eleifend risus id viverra feugiat. Sed efficitur vehicula orci, hendrerit consequat nisi dictum luctus. Mauris sit amet diam nulla. Cras at tortor sit amet libero facilisis scelerisque. Cras ultricies at tellus id tincidunt. Suspendisse vel justo leo. Nunc tempus porttitor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id pretium quam, laoreet interdum nisi. Curabitur ac pharetra turpis. In eros magna, feugiat id arcu vel, posuere sodales elit. Vivamus sed mauris sit amet elit ullamcorper malesuada. Curabitur tincidunt felis nec tincidunt faucibus. Sed faucibus nibh eu tortor pulvinar tempor. Nullam elit erat, finibus nec dictum congue, tempor id est.</p>

                                        <p> Duis pulvinar metus arcu, eu suscipit ante congue non. Integer laoreet quam dolor, et pellentesque tortor luctus nec. Vivamus accumsan, dolor ac tempor maximus, nunc arcu imperdiet lorem, sit amet sollicitudin tellus libero vitae enim. Duis in aliquet sem. Etiam tristique semper lacus, ut viverra urna tincidunt in. Aenean facilisis lectus sit amet felis pellentesque, id sodales leo placerat. In ac convallis massa. Proin ultricies mollis nulla non congue. Ut vulputate pretium iaculis. In posuere sem ac turpis aliquet, eget finibus diam imperdiet. Phasellus cursus sed neque accumsan vulputate. </p>

                                    </div> : null}
                                {active ?
                                    <div className="swipe-tab-content">

                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor vehicula, tincidunt nisi eu, mattis orci. Quisque elementum scelerisque nisi, et ultrices nisl egestas et. Ut viverra ante at lorem fringilla, porttitor fermentum lorem mollis. Nulla id odio enim. Fusce tortor felis, commodo id egestas eu, tristique sit amet tortor. Maecenas id mi vitae dui blandit bibendum eu sit amet nibh. Donec ut elit urna. Maecenas sit amet egestas sem. In non nisl commodo tellus finibus finibus. Vestibulum condimentum semper aliquam. Vivamus consequat ante nec leo hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed porta metus. Nulla id est posuere, consectetur quam et, fringilla velit. Donec nibh tellus, pellentesque at enim non, commodo mollis nibh. Nam pretium luctus lectus, aliquet semper ante dapibus sit amet.</p>

                                        <p> Morbi eleifend risus id viverra feugiat. Sed efficitur vehicula orci, hendrerit consequat nisi dictum luctus. Mauris sit amet diam nulla. Cras at tortor sit amet libero facilisis scelerisque. Cras ultricies at tellus id tincidunt. Suspendisse vel justo leo. Nunc tempus porttitor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id pretium quam, laoreet interdum nisi. Curabitur ac pharetra turpis. In eros magna, feugiat id arcu vel, posuere sodales elit. Vivamus sed mauris sit amet elit ullamcorper malesuada. Curabitur tincidunt felis nec tincidunt faucibus. Sed faucibus nibh eu tortor pulvinar tempor. Nullam elit erat, finibus nec dictum congue, tempor id est.</p>

                                        <p> Duis pulvinar metus arcu, eu suscipit ante congue non. Integer laoreet quam dolor, et pellentesque tortor luctus nec. Vivamus accumsan, dolor ac tempor maximus, nunc arcu imperdiet lorem, sit amet sollicitudin tellus libero vitae enim. Duis in aliquet sem. Etiam tristique semper lacus, ut viverra urna tincidunt in. Aenean facilisis lectus sit amet felis pellentesque, id sodales leo placerat. In ac convallis massa. Proin ultricies mollis nulla non congue. Ut vulputate pretium iaculis. In posuere sem ac turpis aliquet, eget finibus diam imperdiet. Phasellus cursus sed neque accumsan vulputate. </p>
                                    </div> : null}
                                {active ?
                                    <div className="swipe-tab-content">

                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor vehicula, tincidunt nisi eu, mattis orci. Quisque elementum scelerisque nisi, et ultrices nisl egestas et. Ut viverra ante at lorem fringilla, porttitor fermentum lorem mollis. Nulla id odio enim. Fusce tortor felis, commodo id egestas eu, tristique sit amet tortor. Maecenas id mi vitae dui blandit bibendum eu sit amet nibh. Donec ut elit urna. Maecenas sit amet egestas sem. In non nisl commodo tellus finibus finibus. Vestibulum condimentum semper aliquam. Vivamus consequat ante nec leo hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed porta metus. Nulla id est posuere, consectetur quam et, fringilla velit. Donec nibh tellus, pellentesque at enim non, commodo mollis nibh. Nam pretium luctus lectus, aliquet semper ante dapibus sit amet.</p>

                                        <p> Morbi eleifend risus id viverra feugiat. Sed efficitur vehicula orci, hendrerit consequat nisi dictum luctus. Mauris sit amet diam nulla. Cras at tortor sit amet libero facilisis scelerisque. Cras ultricies at tellus id tincidunt. Suspendisse vel justo leo. Nunc tempus porttitor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id pretium quam, laoreet interdum nisi. Curabitur ac pharetra turpis. In eros magna, feugiat id arcu vel, posuere sodales elit. Vivamus sed mauris sit amet elit ullamcorper malesuada. Curabitur tincidunt felis nec tincidunt faucibus. Sed faucibus nibh eu tortor pulvinar tempor. Nullam elit erat, finibus nec dictum congue, tempor id est.</p>

                                        <p> Duis pulvinar metus arcu, eu suscipit ante congue non. Integer laoreet quam dolor, et pellentesque tortor luctus nec. Vivamus accumsan, dolor ac tempor maximus, nunc arcu imperdiet lorem, sit amet sollicitudin tellus libero vitae enim. Duis in aliquet sem. Etiam tristique semper lacus, ut viverra urna tincidunt in. Aenean facilisis lectus sit amet felis pellentesque, id sodales leo placerat. In ac convallis massa. Proin ultricies mollis nulla non congue. Ut vulputate pretium iaculis. In posuere sem ac turpis aliquet, eget finibus diam imperdiet. Phasellus cursus sed neque accumsan vulputate. </p>
                                    </div> : null}
                                {active ?
                                    <div className="swipe-tab-content">
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor vehicula, tincidunt nisi eu, mattis orci. Quisque elementum scelerisque nisi, et ultrices nisl egestas et. Ut viverra ante at lorem fringilla, porttitor fermentum lorem mollis. Nulla id odio enim. Fusce tortor felis, commodo id egestas eu, tristique sit amet tortor. Maecenas id mi vitae dui blandit bibendum eu sit amet nibh. Donec ut elit urna. Maecenas sit amet egestas sem. In non nisl commodo tellus finibus finibus. Vestibulum condimentum semper aliquam. Vivamus consequat ante nec leo hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed porta metus. Nulla id est posuere, consectetur quam et, fringilla velit. Donec nibh tellus, pellentesque at enim non, commodo mollis nibh. Nam pretium luctus lectus, aliquet semper ante dapibus sit amet.</p>

                                        <p> Morbi eleifend risus id viverra feugiat. Sed efficitur vehicula orci, hendrerit consequat nisi dictum luctus. Mauris sit amet diam nulla. Cras at tortor sit amet libero facilisis scelerisque. Cras ultricies at tellus id tincidunt. Suspendisse vel justo leo. Nunc tempus porttitor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id pretium quam, laoreet interdum nisi. Curabitur ac pharetra turpis. In eros magna, feugiat id arcu vel, posuere sodales elit. Vivamus sed mauris sit amet elit ullamcorper malesuada. Curabitur tincidunt felis nec tincidunt faucibus. Sed faucibus nibh eu tortor pulvinar tempor. Nullam elit erat, finibus nec dictum congue, tempor id est.</p>

                                        <p> Duis pulvinar metus arcu, eu suscipit ante congue non. Integer laoreet quam dolor, et pellentesque tortor luctus nec. Vivamus accumsan, dolor ac tempor maximus, nunc arcu imperdiet lorem, sit amet sollicitudin tellus libero vitae enim. Duis in aliquet sem. Etiam tristique semper lacus, ut viverra urna tincidunt in. Aenean facilisis lectus sit amet felis pellentesque, id sodales leo placerat. In ac convallis massa. Proin ultricies mollis nulla non congue. Ut vulputate pretium iaculis. In posuere sem ac turpis aliquet, eget finibus diam imperdiet. Phasellus cursus sed neque accumsan vulputate. </p>
                                    </div> : null}
                                {active ?
                                    <div className="swipe-tab-content">
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor vehicula, tincidunt nisi eu, mattis orci. Quisque elementum scelerisque nisi, et ultrices nisl egestas et. Ut viverra ante at lorem fringilla, porttitor fermentum lorem mollis. Nulla id odio enim. Fusce tortor felis, commodo id egestas eu, tristique sit amet tortor. Maecenas id mi vitae dui blandit bibendum eu sit amet nibh. Donec ut elit urna. Maecenas sit amet egestas sem. In non nisl commodo tellus finibus finibus. Vestibulum condimentum semper aliquam. Vivamus consequat ante nec leo hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed porta metus. Nulla id est posuere, consectetur quam et, fringilla velit. Donec nibh tellus, pellentesque at enim non, commodo mollis nibh. Nam pretium luctus lectus, aliquet semper ante dapibus sit amet.</p>

                                        <p> Morbi eleifend risus id viverra feugiat. Sed efficitur vehicula orci, hendrerit consequat nisi dictum luctus. Mauris sit amet diam nulla. Cras at tortor sit amet libero facilisis scelerisque. Cras ultricies at tellus id tincidunt. Suspendisse vel justo leo. Nunc tempus porttitor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id pretium quam, laoreet interdum nisi. Curabitur ac pharetra turpis. In eros magna, feugiat id arcu vel, posuere sodales elit. Vivamus sed mauris sit amet elit ullamcorper malesuada. Curabitur tincidunt felis nec tincidunt faucibus. Sed faucibus nibh eu tortor pulvinar tempor. Nullam elit erat, finibus nec dictum congue, tempor id est.</p>

                                        <p> Duis pulvinar metus arcu, eu suscipit ante congue non. Integer laoreet quam dolor, et pellentesque tortor luctus nec. Vivamus accumsan, dolor ac tempor maximus, nunc arcu imperdiet lorem, sit amet sollicitudin tellus libero vitae enim. Duis in aliquet sem. Etiam tristique semper lacus, ut viverra urna tincidunt in. Aenean facilisis lectus sit amet felis pellentesque, id sodales leo placerat. In ac convallis massa. Proin ultricies mollis nulla non congue. Ut vulputate pretium iaculis. In posuere sem ac turpis aliquet, eget finibus diam imperdiet. Phasellus cursus sed neque accumsan vulputate. </p>
                                    </div> : null}
                                {active ?
                                    <div className="swipe-tab-content">
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor vehicula, tincidunt nisi eu, mattis orci. Quisque elementum scelerisque nisi, et ultrices nisl egestas et. Ut viverra ante at lorem fringilla, porttitor fermentum lorem mollis. Nulla id odio enim. Fusce tortor felis, commodo id egestas eu, tristique sit amet tortor. Maecenas id mi vitae dui blandit bibendum eu sit amet nibh. Donec ut elit urna. Maecenas sit amet egestas sem. In non nisl commodo tellus finibus finibus. Vestibulum condimentum semper aliquam. Vivamus consequat ante nec leo hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed porta metus. Nulla id est posuere, consectetur quam et, fringilla velit. Donec nibh tellus, pellentesque at enim non, commodo mollis nibh. Nam pretium luctus lectus, aliquet semper ante dapibus sit amet.</p>

                                        <p> Morbi eleifend risus id viverra feugiat. Sed efficitur vehicula orci, hendrerit consequat nisi dictum luctus. Mauris sit amet diam nulla. Cras at tortor sit amet libero facilisis scelerisque. Cras ultricies at tellus id tincidunt. Suspendisse vel justo leo. Nunc tempus porttitor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id pretium quam, laoreet interdum nisi. Curabitur ac pharetra turpis. In eros magna, feugiat id arcu vel, posuere sodales elit. Vivamus sed mauris sit amet elit ullamcorper malesuada. Curabitur tincidunt felis nec tincidunt faucibus. Sed faucibus nibh eu tortor pulvinar tempor. Nullam elit erat, finibus nec dictum congue, tempor id est.</p>

                                        <p> Duis pulvinar metus arcu, eu suscipit ante congue non. Integer laoreet quam dolor, et pellentesque tortor luctus nec. Vivamus accumsan, dolor ac tempor maximus, nunc arcu imperdiet lorem, sit amet sollicitudin tellus libero vitae enim. Duis in aliquet sem. Etiam tristique semper lacus, ut viverra urna tincidunt in. Aenean facilisis lectus sit amet felis pellentesque, id sodales leo placerat. In ac convallis massa. Proin ultricies mollis nulla non congue. Ut vulputate pretium iaculis. In posuere sem ac turpis aliquet, eget finibus diam imperdiet. Phasellus cursus sed neque accumsan vulputate. </p>
                                    </div> : null}
                                {active ?
                                    <div className="swipe-tab-content">
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor vehicula, tincidunt nisi eu, mattis orci. Quisque elementum scelerisque nisi, et ultrices nisl egestas et. Ut viverra ante at lorem fringilla, porttitor fermentum lorem mollis. Nulla id odio enim. Fusce tortor felis, commodo id egestas eu, tristique sit amet tortor. Maecenas id mi vitae dui blandit bibendum eu sit amet nibh. Donec ut elit urna. Maecenas sit amet egestas sem. In non nisl commodo tellus finibus finibus. Vestibulum condimentum semper aliquam. Vivamus consequat ante nec leo hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed porta metus. Nulla id est posuere, consectetur quam et, fringilla velit. Donec nibh tellus, pellentesque at enim non, commodo mollis nibh. Nam pretium luctus lectus, aliquet semper ante dapibus sit amet.</p>

                                        <p> Morbi eleifend risus id viverra feugiat. Sed efficitur vehicula orci, hendrerit consequat nisi dictum luctus. Mauris sit amet diam nulla. Cras at tortor sit amet libero facilisis scelerisque. Cras ultricies at tellus id tincidunt. Suspendisse vel justo leo. Nunc tempus porttitor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id pretium quam, laoreet interdum nisi. Curabitur ac pharetra turpis. In eros magna, feugiat id arcu vel, posuere sodales elit. Vivamus sed mauris sit amet elit ullamcorper malesuada. Curabitur tincidunt felis nec tincidunt faucibus. Sed faucibus nibh eu tortor pulvinar tempor. Nullam elit erat, finibus nec dictum congue, tempor id est.</p>

                                        <p> Duis pulvinar metus arcu, eu suscipit ante congue non. Integer laoreet quam dolor, et pellentesque tortor luctus nec. Vivamus accumsan, dolor ac tempor maximus, nunc arcu imperdiet lorem, sit amet sollicitudin tellus libero vitae enim. Duis in aliquet sem. Etiam tristique semper lacus, ut viverra urna tincidunt in. Aenean facilisis lectus sit amet felis pellentesque, id sodales leo placerat. In ac convallis massa. Proin ultricies mollis nulla non congue. Ut vulputate pretium iaculis. In posuere sem ac turpis aliquet, eget finibus diam imperdiet. Phasellus cursus sed neque accumsan vulputate. </p>
                                    </div> : null}

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Tabs
