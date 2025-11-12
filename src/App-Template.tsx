import { FlowchartNode, FlowchartArrow } from './components/FlowchartNode';
import { FileText, Users, BookOpen, FileCheck, ClipboardCheck, Database, UserCheck, CheckSquare, Stethoscope, Printer } from 'lucide-react';
import { Card } from './components/ui/card';
import { Checkbox } from './components/ui/checkbox';
import { Button } from './components/ui/button';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-blue-900 mb-2">[TECHNOLOGY NAME] Caregiver Education</h1>
          <p className="text-gray-600">Simulation Discharge Program (SDP)</p>
        </div>

        {/* Print Button */}
        <div className="flex justify-center mb-8 print:hidden">
          <Button 
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            size="lg"
          >
            <Printer size={20} />
            Export to PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN - MAIN FLOW */}
          <div className="flex flex-col items-center space-y-4">
            <div className="sticky top-8 mb-4">
              <div className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg">
                <h2>Process Flow</h2>
              </div>
            </div>

            {/* Step 1: Initial Consult */}
            <FlowchartNode
              type="start"
              title="SDP Education Request Initiated"
              icon={<FileText className="text-blue-600" size={24} />}
              variant="info"
            />
            <div className="bg-white rounded-lg shadow-md p-4 max-w-md border-2 border-blue-200">
              <p className="text-gray-700 mb-2">Primary team member, care coordination, or social work emails SDP contacts:</p>
              <div className="space-y-1 text-gray-600">
                <div>• Tricia Budway: <a href="mailto:trb9006@nyp.org" className="text-blue-600 hover:underline">trb9006@nyp.org</a></div>
                <div>• Jane Harrington: <a href="mailto:jharring@nyp.org" className="text-blue-600 hover:underline">jharring@nyp.org</a></div>
                <div>• Lilly Fox: <a href="mailto:elf9094@nyp.org" className="text-blue-600 hover:underline">elf9094@nyp.org</a></div>
                <div>• MacKenzi Preston: <a href="mailto:mnh9003@med.cornell.edu" className="text-blue-600 hover:underline">mnh9003@med.cornell.edu</a></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 max-w-md border-2 border-teal-200">
              <p className="text-gray-700 mb-2">Primary Team offers referral for PFAC Peer to Peer support if not yet done</p>
              <div className="text-gray-600 mb-3">
                <div>Referrals email to Mariela Guerra: <a href="mailto:mag9152@nyp.org" className="text-blue-600 hover:underline">mag9152@nyp.org</a></div>
              </div>
              <a 
                href="YOUR_PDF_LINK_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                <FileText size={16} />
                Download Referral Form (PDF)
              </a>
            </div>

            <FlowchartArrow />

            {/* Step 2: Formal Teaching */}
            <FlowchartNode
              type="process"
              title="SDP - Formal Hands-On Teaching"
              description="SDP provides teaching for family using a manikin/child. SDP documents using SDP smart phrase"
              icon={<Users className="text-amber-600" size={24} />}
              variant="warning"
            >
              <div className="bg-blue-100 rounded-lg p-2 border border-blue-300">
                <p className="text-blue-900">
                  <span className="font-semibold">Smart Phrase:</span> <code className="bg-white px-2 py-1 rounded text-blue-700">.SDP[TECH]</code>
                </p>
              </div>
            </FlowchartNode>

            <FlowchartArrow />

            {/* Step 3: Parent Care Booklet */}
            <FlowchartNode
              type="process"
              title="Patient Care Binder"
              description="Placed at bedside or with nursing"
              icon={<BookOpen className="text-amber-600" size={24} />}
              variant="warning"
            >
              <a 
                href="YOUR_BOOKLET_LINK_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors text-sm"
              >
                <BookOpen size={16} />
                View Parent Care Booklet
              </a>
            </FlowchartNode>

            <FlowchartArrow />

            {/* Step 5: Skills Checklist */}
            <div id="skills-checklist-step">
              <FlowchartNode
                type="process"
                title="Confirm Parent Skills"
                description="Nurses confirm that parents can perform required skills on child"
                icon={<ClipboardCheck className="text-emerald-600" size={24} />}
                variant="emerald"
              >
                <a 
                  href="YOUR_CHECKLIST_LINK_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-sm"
                >
                  <FileText size={16} />
                  View Skills Checklist
                </a>
              </FlowchartNode>
            </div>

            <FlowchartArrow />

            {/* Step 6: Final Documentation */}
            <FlowchartNode
              type="process"
              title="Discharge Documentation"
              description="Discharge nurse documents completed education in EPIC"
              icon={<Database className="text-emerald-600" size={24} />}
              variant="emerald"
            >
              <div className="bg-blue-100 rounded-lg p-2 border border-blue-300">
                <p className="text-blue-900">
                  <span className="font-semibold">Smart Phrase:</span> <code className="bg-white px-2 py-1 rounded text-blue-700">.[TECH]NURSING</code>
                </p>
              </div>
            </FlowchartNode>

            <FlowchartArrow />

            {/* Step 7: Physician Review & Ready for Discharge */}
            <div id="physician-review-step">
              <FlowchartNode
                type="end"
                title="Physician Review Checklist & Ready for Discharge"
                icon={<UserCheck className="text-purple-600" size={24} />}
                variant="purple"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - DETAILED CHECKLISTS */}
          <div className="space-y-8">
            <div className="sticky top-8 mb-4">
              <div className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg">
                <h2>Physician Review Checklist</h2>
              </div>
            </div>

            {/* Physician Review Checklist */}
            <Card className="bg-white border-2 border-purple-300 shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                <CheckSquare className="text-purple-600" size={24} />
                <h3 className="text-purple-900">Physician Review Checklist</h3>
              </div>
              
              <div className="space-y-4">
                {/* Checklist Item 1 */}
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Checkbox id="teaching-complete" className="mt-1" />
                  <label htmlFor="teaching-complete" className="flex-1 cursor-pointer">
                    <div className="text-gray-900">Teaching checklist has been completed</div>
                  </label>
                </div>

                {/* Checklist Item 2 - CUSTOMIZE THIS */}
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Checkbox id="parents-comfortable" className="mt-1" />
                  <label htmlFor="parents-comfortable" className="flex-1 cursor-pointer">
                    <div className="text-gray-900">[CUSTOMIZE: Parents are comfortable with technology]</div>
                  </label>
                </div>

                {/* Checklist Item 3 - CUSTOMIZE THIS */}
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Checkbox id="specialist-consult" className="mt-1" />
                  <label htmlFor="specialist-consult" className="flex-1 cursor-pointer">
                    <div className="text-gray-900">[CUSTOMIZE: Specialist consultation completed]</div>
                    <div className="text-gray-600 mt-1">
                      [Add contact information if relevant]
                    </div>
                  </label>
                </div>

                {/* Checklist Item 4 - CUSTOMIZE THIS */}
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Checkbox id="followup" className="mt-1" />
                  <label htmlFor="followup" className="flex-1 cursor-pointer">
                    <div className="text-gray-900">Follow-up appointments scheduled</div>
                    <div className="text-gray-600 mt-2">
                      <div className="space-y-1">
                        <div>• [Follow-up appointment 1]</div>
                        <div>• [Follow-up appointment 2]</div>
                        <div>• [Follow-up appointment 3]</div>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Checklist Item 5 - CUSTOMIZE THIS */}
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Checkbox id="discharge-summary" className="mt-1" />
                  <label htmlFor="discharge-summary" className="flex-1 cursor-pointer">
                    <div className="text-gray-900">[CUSTOMIZE: Discharge summary documentation]</div>
                    <div className="text-gray-600 mt-1">
                      [Specific documentation requirements]
                    </div>
                  </label>
                </div>

                {/* Checklist Item 6 - Supplies - CUSTOMIZE THIS */}
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Checkbox id="supplies" className="mt-1" />
                  <label htmlFor="supplies" className="flex-1 cursor-pointer">
                    <div className="text-gray-900">[TECHNOLOGY] supplies ordered and delivered</div>
                    <div className="text-gray-600 mt-2">
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <div>• [Supply 1]</div>
                        <div>• [Supply 2]</div>
                        <div>• [Supply 3]</div>
                        <div>• [Supply 4]</div>
                        <div>• [Supply 5]</div>
                        <div>• [Supply 6]</div>
                        <div>• [Supply 7]</div>
                        <div>• [Supply 8]</div>
                        <div>• [Supply 9]</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
