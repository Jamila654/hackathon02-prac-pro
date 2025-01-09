"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { client, urlFor } from "./lib/sanity";
import { FaCartPlus } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "./components/CartContext";

type Tag = {
  _id: string;
  name: string;
};

type Product = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  quantity: number;
  discountPercentage?: number;
  priceWithoutDiscount?: number;
  image: any;
  tags: Tag[];
  sizes: string[];
};

async function getTodays4(): Promise<Product[]> {
  const query = `*[_type == "product" && references(*[_type == "tags" && name == "Today"]._id)]{
  _id,
  name,
  slug,
  price,
  quantity,
  discountPercentage,
        priceWithoutDiscount,
  image{
    asset->{url}
  },
  tags[]->{name},
}[0...4]`;
  const todayProducts = await client.fetch(query);
  return todayProducts;
}
async function getThisMonth(): Promise<Product[]> {
  const query = `*[_type == "product" && references(*[_type == "tags" && name == "This Month"]._id)]{
  _id,
  name,
  slug,
  price,
  quantity,
  discountPercentage,
        priceWithoutDiscount,
  image{
    asset->{url}
  },
  tags[]->{name},
}[0...4]`;
  const getThisMonthProducts = await client.fetch(query);
  return getThisMonthProducts;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [getThisMonthProducts, setGetThisMonthProducts] = useState<Product[]>(
    []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getTodays4();
      const data2 = await getThisMonth();
      console.log("Fetched Products:", data);
      setProducts(data);
      setGetThisMonthProducts(data2);
    };

    fetchProducts();
  }, []);
  const productImages = [
    "/Cart With Flat Discount.png",
    "/Cart With Flat Discount (1).png",
    "/Cart With Flat Discount (2).png",
    "/Cart With Flat Discount (3).png",
    "/Cart With Flat Discount (4).png",
    "/Cart With Flat Discount (5).png",
  ];
  const categoryImages = [
    "/Category-Phone.png",
    "/Category-Phone (1).png",
    "/Category-Phone (2).png",
    "/Category-Phone (3).png",
    "/Category-Phone (4).png",
    "/Category-Phone (5).png",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [startCategoryIndex, setStartCategoryIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(6);
  useEffect(() => {
    const updateVisibleCategories = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCategories(2);
      else if (width < 1024) setVisibleCategories(4);
      else setVisibleCategories(6);
    };

    updateVisibleCategories();
    window.addEventListener("resize", updateVisibleCategories);
    return () => window.removeEventListener("resize", updateVisibleCategories);
  }, []);

  const handlePrevCategory = () => {
    setStartCategoryIndex((prevIndex) =>
      prevIndex - visibleCategories < 0
        ? Math.max(0, categoryImages.length - visibleCategories)
        : prevIndex - visibleCategories
    );
  };

  const handleNextCategory = () => {
    setStartCategoryIndex((prevIndex) =>
      prevIndex + visibleCategories >= categoryImages.length
        ? 0
        : prevIndex + visibleCategories
    );
  };

  const visibleProducts = 4;

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - visibleProducts < 0
        ? Math.max(0, productImages.length - visibleProducts)
        : prevIndex - visibleProducts
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleProducts >= productImages.length
        ? 0
        : prevIndex + visibleProducts
    );
  };

  return (
    <div className=" w-full min-h-screen flex flex-col justify-between font-[family-name:var(--font-geist-sans)]">
      <div className="intro flex">
        <div className="select-container w-[30%] h-[400px]  border-r-2 border-[#b3aeae]  text-wrap font-bold flex flex-col items-center justify-around">
          <Link href={"/electronics"}>
            <h1 className="-ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Electronics
            </h1>
          </Link>
          <Link href={"/jewelery"}>
            <h1 className="ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Jewelery
            </h1>
          </Link>
          <Link href={"/menClothing"}>
            <h1 className="ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Men's clothing
            </h1>
          </Link>
          <Link href={"/womenClothing"}>
            <h1 className="ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Women's clothing
            </h1>
          </Link>
          <Link href={"/electronics"}>
            <h1 className="ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Home & Lifestyle
            </h1>
          </Link>
          <Link href={"/jewelery"}>
            <h1 className="ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Sports & Outdoor
            </h1>
          </Link>
          <Link href={"/menClothing"}>
            <h1 className="ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Baby's & Toys
            </h1>
          </Link>
          <Link href={"/womenClothing"}>
            <h1 className="ml-1 sm:ml-10 md:ml-28 hover:underline underline-offset-4 decoration-[#b3aeae]">
              Health & Beauty
            </h1>
          </Link>
        </div>
        <div className="second w-[70%] h-[400px] ">
          <Image
            src={"/Frame 560.png"}
            alt="frame"
            width={400}
            height={400}
            className=" w-[85%] h-full ml-10"
          />
        </div>
      </div>
      <section className=" w-full flex flex-col gap-5 mt-24 p-4 md:px-36 ">
        <div className="intro">
          <div className="first flex items-center gap-4">
            <Image
              src={"/Category Rectangle.png"}
              width={20}
              height={30}
              alt="rec"
            />
            <h1 className=" text-[#db4543] font-bold">Today's</h1>
          </div>
        </div>
        <div className="sales w-full flex items-center justify-between gap-4">
          <div className="first text-md md:text-3xl font-bold flex items-center gap-10">
            <h1 className=" mt-5">Flash Sales</h1>
            <Image
              src={"/Group 1000005937.png"}
              alt="time"
              width={100}
              height={100}
              className=" w-[100px] md:w-[300px]"
            />
          </div>
        </div>
        <div className=" z-50 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product._id}
                className="w-[272px] h-[442px] bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <CardContent className="relative p-4">
                  <div className="w-full h-48 bg-gray-200 relative">
                    <img
                      src={
                        urlFor(product.image).url() || "/placeholder-image.jpg"
                      }
                      alt={product.name}
                      className="w-full h-full"
                    />
                    {product.discountPercentage && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-md">
                        -{product.discountPercentage}%
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <CardHeader className="mb-2">
                    <CardTitle className="text-sm font-semibold text-gray-800 line-clamp-2">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-bold text-gray-900">
                      ${product.price}
                      {product.discountPercentage && (
                        <span className="text-sm text-red-600 line-through ml-2">
                          ${product.priceWithoutDiscount}
                        </span>
                      )}
                    </p>
                    <div className="w-full flex flex-col  gap-3 text-sm mt-4">
                      {/* <Button className="w-[272px] flex items-center justify-center gap-2"onClick={() => handleAddToCart(product)}>
                        <FaCartPlus />
                        Add To Cart
                      </Button> */}
                      <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 gap-2">
                        <Link href={`/products/${product.slug.current}`}>
                          View Details {"-->"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="button mt-10 w-full flex items-center justify-center">
          <Link href={"/products"}>
            <button className="bg-[#db4543] p-2 text-white">
              view All Products
            </button>
          </Link>
        </div>
        <div className="line w-full border-[1.5px] border-[#b3aeae] mt-10"></div>
      </section>
      <section className=" w-full flex flex-col gap-5 mt-24 p-4 md:px-36 ">
        <div className="intro">
          <div className="first flex items-center gap-4">
            <Image
              src={"/Category Rectangle.png"}
              width={20}
              height={30}
              alt="rec"
            />
            <h1 className=" text-[#db4543] font-bold">Categories</h1>
          </div>
        </div>
        <div className="sales w-full flex items-center justify-between gap-4">
          <div className="first text-md md:text-3xl font-bold flex items-center gap-10">
            <h1 className=" mt-5">Browse By Category</h1>
          </div>
          <div className="second flex">
            <Button onClick={handlePrevCategory} variant={"ghost"}>
              <Image
                src={"/Fill With Left Arrow.png"}
                alt="left"
                width={40}
                height={40}
              />
            </Button>
            <Button onClick={handleNextCategory} variant={"ghost"}>
              <Image
                src={"/Fill With Right Arrow.png"}
                alt="right"
                width={40}
                height={40}
              />
            </Button>
          </div>
        </div>
        <div className="products w-full flex justify-between gap-4">
          {categoryImages
            .slice(startCategoryIndex, startCategoryIndex + visibleCategories)
            .map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[170px] h-[145px] flex justify-center items-center"
              >
                <Image
                  src={image}
                  alt={`Category ${index}`}
                  width={170}
                  height={145}
                  className="hover:bg-[#db4543] object-contain"
                />
              </div>
            ))}
        </div>
      </section>
      <section className=" w-full flex flex-col gap-5 mt-24 p-4 md:px-36 ">
        <div className="intro">
          <div className="first flex items-center gap-4">
            <Image
              src={"/Category Rectangle.png"}
              width={20}
              height={30}
              alt="rec"
            />
            <h1 className=" text-[#db4543] font-bold">This Month</h1>
          </div>
        </div>
        <div className="sales w-full flex items-center justify-between gap-4">
          <div className="first text-md md:text-3xl font-bold flex items-center gap-10">
            <h1 className=" mt-5">Best Selling Products</h1>
          </div>
          <div className="second flex">
            <Link href={"/products"}>
              <Button
                variant={"ghost"}
                className=" bg-[#db4543] text-white font-bold"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
        <div className=" z-50 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {getThisMonthProducts.map((product) => (
              <Card
                key={product._id}
                className="w-[272px] h-[442px] bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <CardContent className="relative p-4">
                  <div className="w-full h-48 bg-gray-200 relative">
                    <img
                      src={
                        urlFor(product.image).url() || "/placeholder-image.jpg"
                      }
                      alt={product.name}
                      className="w-full h-full"
                    />
                    {product.discountPercentage && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-md">
                        -{product.discountPercentage}%
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <CardHeader className="mb-2">
                    <CardTitle className="text-sm font-semibold text-gray-800 line-clamp-2">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-bold text-gray-900">
                      ${product.price}
                      {product.discountPercentage && (
                        <span className="text-sm text-red-600 line-through ml-2">
                          ${product.priceWithoutDiscount}
                        </span>
                      )}
                    </p>
                    <div className="w-full flex flex-col  gap-3 text-sm mt-4">
                      <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 gap-2">
                        <Link href={`/products/${product.slug.current}`}>
                          View Details {"-->"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className=" w-full mt-24 p-4 md:px-36 ">
        <Image src={"/Frame 600.png"} height={500} width={1170} alt="" />
      </section>
      <section className="hidden w-full lg:flex lg:flex-col gap-5 mt-24 p-4 md:px-36 ">
        <div className="intro">
          <div className="first flex items-center gap-4">
            <Image
              src={"/Category Rectangle.png"}
              width={20}
              height={30}
              alt="rec"
            />
            <h1 className=" text-[#db4543] font-bold">Our Products</h1>
          </div>
        </div>
        <div className="sales w-full flex items-center justify-between gap-4">
          <div className="first text-md md:text-3xl font-bold flex items-center gap-10">
            <h1 className=" mt-5">Explore Our Products</h1>
          </div>
          <div className="second flex">
            <Button variant={"ghost"}>
              <Image
                src={"/Fill With Left Arrow.png"}
                alt="left"
                width={40}
                height={40}
              />
            </Button>
            <Button variant={"ghost"}>
              <Image
                src={"/Fill With Right Arrow.png"}
                alt="right"
                width={40}
                height={40}
              />
            </Button>
          </div>
        </div>
        <div className="z-50 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product._id}
                className="w-[272px] h-[442px] bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <CardContent className="relative p-4">
                  <div className="w-full h-48 bg-gray-200 relative">
                    <img
                      src={
                        urlFor(product.image).url() || "/placeholder-image.jpg"
                      }
                      alt={product.name}
                      className="w-full h-full"
                    />
                    {product.discountPercentage && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-md">
                        -{product.discountPercentage}%
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <CardHeader className="mb-2">
                    <CardTitle className="text-sm font-semibold text-gray-800 line-clamp-2">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-bold text-gray-900">
                      ${product.price}
                      {product.discountPercentage && (
                        <span className="text-sm text-red-600 line-through ml-2">
                          ${product.priceWithoutDiscount}
                        </span>
                      )}
                    </p>
                    <div className="w-full flex flex-col  gap-3 text-sm mt-4">
                      {/* <Button className="w-[272px] flex items-center justify-center gap-2" onClick={() => handleAddToCart(product)}>
                        <FaCartPlus />
                        Add To Cart
                      </Button> */}
                      <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 gap-2">
                        <Link href={`/products/${product.slug.current}`}>
                          View Details {"-->"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className=" z-50 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {getThisMonthProducts.map((product) => (
              <Card
                key={product._id}
                className="w-[272px] h-[442px] bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <CardContent className="relative p-4">
                  <div className="w-full h-48 bg-gray-200 relative">
                    <img
                      src={
                        urlFor(product.image).url() || "/placeholder-image.jpg"
                      }
                      alt={product.name}
                      className="w-full h-full"
                    />
                    {product.discountPercentage && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-md">
                        -{product.discountPercentage}%
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <CardHeader className="mb-2">
                    <CardTitle className="text-sm font-semibold text-gray-800 line-clamp-2">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-bold text-gray-900">
                      ${product.price}
                      {product.discountPercentage && (
                        <span className="text-sm text-red-600 line-through ml-2">
                          ${product.priceWithoutDiscount}
                        </span>
                      )}
                    </p>
                    <div className="w-full flex flex-col  gap-3 text-sm mt-4">
                      {/* <Button className="w-[272px] flex items-center justify-center gap-2" onClick={() => handleAddToCart(product)}>
                        <FaCartPlus />
                        Add To Cart
                      </Button> */}
                      <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 gap-2">
                        <Link href={`/products/${product.slug.current}`}>
                          View Details {"-->"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className=" hidden w-full lg:flex lg:flex-col gap-5 mt-24 p-4 md:px-36 ">
        <div className="intro">
          <div className="first flex items-center gap-4">
            <Image
              src={"/Category Rectangle.png"}
              width={20}
              height={30}
              alt="rec"
            />
            <h1 className=" text-[#db4543] font-bold">Featured</h1>
          </div>
        </div>
        <div className="sales w-full flex items-center justify-between gap-4">
          <div className="first text-md md:text-3xl font-bold flex items-center gap-10">
            <h1 className=" mt-5">New Arrival</h1>
          </div>
        </div>
        <div className="container hidden lg:flex gap-4">
          <Image src={"/Frame 684.png"} width={570} height={600} alt="" />
          <Image src={"/Frame 738.png"} width={570} height={600} alt="" />
        </div>
      </section>
      <section className=" w-full flex items-center justify-center mt-24 p-4 md:px-36">
        <Image src={"/Frame 702.png"} width={943} height={161} alt="" />
      </section>
    </div>
  );
}
