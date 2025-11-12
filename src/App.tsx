import { useState } from 'react';
import { GTubeFlowchart } from './components/GTubeFlowchart';
import { NGTubeFlowchart } from './components/NGTubeFlowchart';
import { TracheostomyFlowchart } from './components/TracheostomyFlowchart';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Tabs defaultValue="gtube" className="w-full">
        {/* Tab Navigation */}
        <div className="bg-white border-b shadow-sm print:hidden sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3">
              <TabsTrigger value="gtube" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                G-Tube
              </TabsTrigger>
              <TabsTrigger value="ngtube" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                NG Tube
              </TabsTrigger>
              <TabsTrigger value="tracheostomy" className="data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                Tracheostomy
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Tab Content */}
        <TabsContent value="gtube" className="mt-0">
          <GTubeFlowchart />
        </TabsContent>

        <TabsContent value="ngtube" className="mt-0">
          <NGTubeFlowchart />
        </TabsContent>

        <TabsContent value="tracheostomy" className="mt-0">
          <TracheostomyFlowchart />
        </TabsContent>
      </Tabs>
    </div>
  );
}
