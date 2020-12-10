# JavaScript Blog Rendering

This Repository contains a Project which renders Blogs using Asynchronous JavaScript.\
This Project is created using a Modular approach, where various functionalities are divided into various Modules.\
This Project will load the Blog Image, Blog Title, Blog Content, & the Related Links of the blog dynamically from the Data Source.\
The Data Source will use Axios to load the Data Asynchronously from the Hosted JSON Data Source.\
The Blog will have a static footer, while the Blog Header, the Blog Contents & the Related Links will dynamically change whenever a Related Link is clicked.

# Main Component:

The Main Component uses various other component modules to render the various contents of the Blog.\
It uses Header Content Component, Blog Image Component, Blog Content Component, Related Links Component & Footer Content Component to load the complete Markup.

# Data Fetch Component:

The Data Fetch Component uses Asynchronous JavaScript mechanism like Axios to get the data from a Hosted JSON Data Source.\
This data is stored in an array which is exported to other modules for access.

# Header Content Component:

The Header Content Component contains the Header Markup in the form of Template Strings.\
It will contain the Image & Title of the Current Blog.\
It will return the Header Markup inside a Div.

# Footer Content Component:

The Footer Content Component contains the Footer Markup in the form of Template Strings.\
It will return the Header Markup inside a Div.

# Blog Image Component:

The Blog Image Component will contain the Blog Image Source & Alternate Description.\
It will return the Image Markup inside a Div.

# Blog Content Component:

The Blog Content Component will contain the Blog Title & the Blog Content.\
It will return the Blog Content Markup inside a Div.

# Related Links Component:

The Related Links Component will contain the List of Related Links.\
Each List Item will have it's Id as the Id of the Blog it will load & the Text as the Title of that Blog.\
Each List Item will also have it's own on click Event Listener which will call the render new Blog module when clicked.\
It will return the Related Links Markup inside a Unordered List.

# Render New Blog Component:

The Render New Blog Component will be used to render the New Blog whenever a Related Link is clicked.\
It will use the Find Blog By Id component to find the Blog Object from the Data Source by using the Id.\
The old content from the Header Section, the Blog Content Section & the Related Links Section will be cleared.\
New Blog Object will use the Header Content Component, Blog Image Component, Blog Content Component & Related Links Component to load the complete Markup.\
The Footer won't be changed as it has Static Content.

# Find Blog By Id Component:

The Find Blog By Id component will be used to find the Blog Object from the Data Source by using the Id.\
This Id will be the same Id that is of the List Item.\
It will then return the Blog Object which matches the Id.

# Demo:

Live Demo of the JavaScript Blog Rendering can be found here:\
https://khardik1698.github.io/JSBlogRendering/
