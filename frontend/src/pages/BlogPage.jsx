import React, { useState } from "react";

const BlogPage = () => {
  const allBlogs = [
    {
      id: 1,
      title: "Top 10 Luxury Hotels in Bangalore",
      description:
        "Discover the most luxurious hotels in Bangalore for a perfect stay with premium amenities and world-class services.",
      image:
        "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "How to Choose the Perfect Hotel Room",
      description:
        "A guide to selecting the best hotel room for your stay, considering location, price, and amenities.",
      image:
        "https://images.unsplash.com/photo-1576675789846-49c3e37f0d42?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      id: 3,
      title: "5 Tips to Save on Hotel Bookings",
      description:
        "Learn how to save money on your hotel stays without compromising comfort or experience.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Experience the Best of Local Cuisine",
      description:
        "Explore how hotel stays can give you access to authentic local food and culinary experiences.",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Hotel Safety Tips During Travel",
      description:
        "Ensure your hotel stay is safe and secure with these essential tips for travelers.",
      image:
        "https://images.unsplash.com/photo-1582719478174-59a0e8d2dba6?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      id: 6,
      title: "How to Choose Family-Friendly Hotels",
      description:
        "Find out what makes a hotel perfect for family vacations and what to look for in amenities.",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
  ];

  const [visibleBlogs, setVisibleBlogs] = useState(3); // initial 3 blogs visible

  const loadMore = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  const featuredBlog = allBlogs.find((blog) => blog.featured);

  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-primary">Blog</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest travel tips, hotel recommendations, and industry insights.
        </p>
      </div>

      {/* Featured Blog */}
      {featuredBlog && (
        <div className="mb-12 border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
          <img
            src={featuredBlog.image}
            alt={featuredBlog.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{featuredBlog.title}</h2>
            <p className="mt-3 text-gray-600">{featuredBlog.description}</p>
            <a
              href={featuredBlog.link}
              className="inline-block mt-4 px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-dull transition-all"
            >
              Read More
            </a>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allBlogs.slice(0, visibleBlogs).map((blog) => (
          <div
            key={blog.id}
            className="border rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
              <p className="mt-2 text-gray-600">{blog.description}</p>
              <a
                href={blog.link}
                className="inline-block mt-4 px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-dull transition-all"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBlogs < allBlogs.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dull transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
