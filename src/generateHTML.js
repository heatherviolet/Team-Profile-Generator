// create the page title

const generateTitle = titleText => {
    if(!titleText) {
        return '';
    }

return `
 <section class="my-3" id="card">
 <h2 class="text-light bg-navy p-2 display-inline-block">My Team</h2>
</section>
`;
};