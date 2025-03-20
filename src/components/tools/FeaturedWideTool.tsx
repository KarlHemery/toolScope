"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Tool } from '@/types/SimpleTool';

interface FeaturedWideToolProps {
  tool: Tool;
  categoryName?: string; // Name der Kategorie für kontextbezogenen Text
}

const FeaturedWideTool = ({ tool, categoryName }: FeaturedWideToolProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="relative w-full">
      {/* Banner mit durchgehendem weißen Rand */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-pink-100 to-pink-200 text-black text-xs py-2 font-medium text-center border border-white rounded-t-xl">
        <span className="inline-flex items-center">
          <span className="text-amber-500">★★★</span>
          <span className="mx-2 tracking-wider uppercase">Featured Tool</span>
          <span className="text-amber-500">★★★</span>
        </span>
      </div>
      
      {/* Hauptinhalt mit Glüheffekt */}
      <div 
        className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden glow-pink mt-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      
        {/* Stil für Regenbogenfarbige Sterne und Rosa-Glühen */}
        <style jsx global>{`
          .text-gradient-rainbow {
            background: linear-gradient(to right, #ff7e5f, #feb47b, #ffcf84, #99f2c8, #1cd8d2, #7767ff, #c471ed);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }
          
          .glow-pink {
            box-shadow: 0 0 18px 4px rgba(236, 72, 153, 0.25);
          }
        `}</style>
        
        {/* Hauptinhalt mit Flexbox - reduzierte Höhe */}
        <div className="flex flex-col md:flex-row pt-12 pb-5 px-8 gap-6">
          {/* Linke Seite mit Logo und Namen */}
          <div className="md:w-1/4 flex items-center gap-3 mb-4 md:mb-0 pl-5">
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <Image 
                src={tool.image || '/images/placeholder.jpg'} 
                alt={`${tool.name} Logo`}
                fill
                sizes="(max-width: 768px) 56px, 64px"
                className="object-cover"
                priority
              />
              {/* Rating Badge */}
              <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm text-xs px-1.5 py-0.5 rounded-tl-md font-medium flex items-center">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" />
                {tool.rating.toFixed(1)}
              </div>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                {tool.name}
              </h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mt-1 mb-1"></div>
              {tool.isNew && (
                <span className="text-xs text-blue-600 font-medium">NEU</span>
              )}
            </div>
          </div>
          
          {/* Mittlerer Teil nur mit Beschreibung */}
          <div className="md:w-2/4 flex items-center px-0 md:px-6">
            <p className="text-base text-gray-700 line-clamp-3 leading-relaxed">
              "{tool.description}"
            </p>
          </div>
          
          {/* Rechte Seite nur mit Button */}
          <div className="md:w-1/4 flex justify-end items-center mt-4 md:mt-0 pr-5">
            <Link 
              href={`/tools/${tool.id}`}
              className={`
                inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 
                text-white text-sm font-medium rounded-md shadow-sm
                hover:from-blue-600 hover:to-blue-700 transition-all
                ${isHovered ? 'shadow-md scale-[1.02]' : ''}
              `}
            >
              <ExternalLink className="mr-1.5 h-4 w-4" />
              Visit
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWideTool;