import { FlowchartNode, FlowchartArrow } from './FlowchartNode';
import { FileText, Users, BookOpen, FileCheck, ClipboardCheck, Database, UserCheck, CheckSquare, Stethoscope, Printer } from 'lucide-react';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

export function NGTubeFlowchart() {
  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-emerald-900 mb-0.5">NGT Caregiver Education</h1>
          <p className="text-gray-600">Simulation Discharge Program (SDP)</p>
        </div>

        {/* Color Legend */}
        <div className="bg-white rounded-lg shadow-md border-2 border-emerald-200 p-3 mb-3 print:mb-2">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-400 rounded"></div>
              <span className="text-gray-700">Initial Steps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-100 border-2 border-amber-400 rounded"></div>
              <span className="text-gray-700">SDP Activities</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-100 border-2 border-emerald-400 rounded"></div>
              <span className="text-gray-700">Nursing Tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-100 border-2 border-purple-400 rounded"></div>
              <span className="text-gray-700">Physician Review</span>
            </div>
          </div>
        </div>

        {/* Print Button */}
        <div className="flex justify-center mb-2 print:hidden">
          <Button 
            onClick={handlePrint}
            className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
            size="sm"
          >
            <Printer size={18} />
            Export to PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* LEFT COLUMN - MAIN FLOW */}
          <div className="flex flex-col items-center space-y-1">
            <div className="bg-emerald-700 text-white px-2 py-1 rounded-lg shadow-lg mb-0.5">
              <h2>Process Flow</h2>
            </div>

            {/* Step 1: Initial Consult */}
            <FlowchartNode
              type="start"
              title="SDP Education Request Initiated"
              description="Primary team member, care coordination, or social work initiates referral (Email or EPIC Chat)"
              icon={<FileText className="text-blue-600" size={20} />}
              variant="info"
              compact
            />

            <div className="relative w-full max-w-2xl my-1">
              <div className="grid grid-cols-2 gap-2">
                {/* NICU Pathway */}
                <div className="bg-white rounded-lg shadow-lg p-1.5 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="bg-blue-600 text-white px-2 py-0.5 rounded-lg mb-1 text-center text-sm">
                    <span>NICU Patients</span>
                  </div>
                  <p className="text-gray-700 mb-0.5 text-xs">Contact:</p>
                  <div className="space-y-0 text-gray-600 mb-1 text-xs">
                    <div>• Tricia Budway: <a href="mailto:trb9006@nyp.org" className="text-blue-600 hover:underline">trb9006@nyp.org</a></div>
                    <div>• Jane Harrington: <a href="mailto:jharring@nyp.org" className="text-blue-600 hover:underline">jharring@nyp.org</a></div>
                    <div>• Lilly Fox: <a href="mailto:elf9094@nyp.org" className="text-blue-600 hover:underline">elf9094@nyp.org</a></div>
                  </div>
                  <div className="border-t pt-0.5 mt-0.5">
                    <p className="text-gray-700 mb-0.5 text-xs">CC:</p>
                    <div className="space-y-0 text-gray-600 text-xs">
                      <div>• MacKenzi Preston: <a href="mailto:mnh9003@med.cornell.edu" className="text-blue-600 hover:underline">mnh9003@med.cornell.edu</a></div>
                    </div>
                  </div>
                </div>

                {/* 6N/C/S Pathway */}
                <div className="bg-white rounded-lg shadow-lg p-1.5 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
                  <div className="bg-indigo-600 text-white px-2 py-0.5 rounded-lg mb-1 text-center text-sm">
                    <span>6N/C/S Patients</span>
                  </div>
                  <p className="text-gray-700 mb-0.5 text-xs">Contact:</p>
                  <div className="space-y-0 text-gray-600 mb-1 text-xs">
                    <div>• Olivia Gasser, NP: <a href="mailto:olg9016@med.cornell.edu" className="text-blue-600 hover:underline">olg9016@med.cornell.edu</a></div>
                  </div>
                  <div className="border-t pt-0.5 mt-0.5">
                    <p className="text-gray-700 mb-0.5 text-xs">CC:</p>
                    <div className="space-y-0 text-gray-600 text-xs">
                      <div>• MacKenzi Preston: <a href="mailto:mnh9003@med.cornell.edu" className="text-blue-600 hover:underline">mnh9003@med.cornell.edu</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-1.5 w-full max-w-2xl border-l-4 border-teal-500 hover:shadow-xl transition-shadow text-center">
              <p className="text-gray-700 mb-0.5 text-sm">Primary Team offers referral for PFAC Peer to Peer support if not yet done</p>
              <div className="text-gray-600 mb-1 text-xs">
                <div>Referrals email to Mariela Guerra: <a href="mailto:mag9152@nyp.org" className="text-blue-600 hover:underline">mag9152@nyp.org</a></div>
              </div>
              <div className="flex justify-center">
                <a 
                  href="https://drive.google.com/file/d/1wB9FrC1081j5Bbg-gFnpvCjhn_JzAPQT/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors text-xs"
                >
                  <FileText size={12} />
                  Download Referral Form (PDF)
                </a>
              </div>
            </div>

            <FlowchartArrow compact />

            {/* Step 2: Formal Teaching + Patient Care Binder */}
            <FlowchartNode
              type="process"
              title="SDP - Formal Hands-On Teaching"
              description="SDP provides teaching for family using a manikin/child. SDP documents using SDP smart phrase. Patient Care Binder placed at bedside or with nursing"
              icon={<Users className="text-amber-600" size={20} />}
              variant="warning"
              compact
            >
              <div className="space-y-1.5">
                <div className="bg-blue-100 rounded-lg p-1.5 border border-blue-300">
                  <p className="text-blue-900 text-sm">
                    <span className="font-semibold">Smart Phrase:</span> <code className="bg-white px-1.5 py-0.5 rounded text-blue-700 text-xs">.SDPNGT</code>
                  </p>
                </div>
                <div className="flex justify-center">
                  <a 
                    href="https://drive.google.com/file/d/1DPS2t5j3z5NubtXxZdsDt4tAVE9d1ARg/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors text-xs"
                  >
                    <BookOpen size={14} />
                    View Parent Care Booklet
                  </a>
                </div>
              </div>
            </FlowchartNode>

            <FlowchartArrow compact />

            {/* Step 5 & 6: Confirm Parent Skills & Discharge Documentation Combined */}
            <div id="skills-checklist-step">
              <FlowchartNode
                type="process"
                title="Confirm Parent Skills & Discharge Documentation"
                description="Nurses confirm that parents can perform required skills on child. Discharge nurse documents completed education in EPIC"
                icon={<ClipboardCheck className="text-emerald-600" size={20} />}
                variant="emerald"
                compact
              >
                <div className="space-y-1.5">
                  <div className="flex justify-center">
                    <a 
                      href="https://drive.google.com/file/d/1dfbGyTFC_97I-nGI8aFNCP89R0mRPiHB/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors text-xs"
                    >
                      <FileText size={14} />
                      View Skills Checklist
                    </a>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-1.5 border border-blue-300">
                    <p className="text-blue-900 text-sm">
                      <span className="font-semibold">Smart Phrase:</span> <code className="bg-white px-1.5 py-0.5 rounded text-blue-700 text-xs">.NGTNURSING</code>
                    </p>
                  </div>
                </div>
              </FlowchartNode>
            </div>

            <FlowchartArrow compact />

            {/* Step 7: Physician Review & Ready for Discharge */}
            <div id="physician-review-step">
              <FlowchartNode
                type="end"
                title="Ready for Discharge"
                description="Physician completes review checklist (see right panel)"
                icon={<UserCheck className="text-purple-600" size={20} />}
                variant="purple"
                compact
              />
            </div>
          </div>

          {/* RIGHT COLUMN - DETAILED CHECKLISTS */}
          <div className="space-y-2">
            <div className="bg-purple-800 text-white px-2 py-1 rounded-lg shadow-lg mb-0.5">
              <h2>Physician Review Checklist</h2>
            </div>

            {/* Physician Review Checklist */}
            <Card className="bg-white border-l-4 border-purple-500 shadow-xl p-2 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b">
                <CheckSquare className="text-purple-600" size={18} />
                <h3 className="text-purple-900">Physician Review Checklist</h3>
              </div>
              
              <div className="space-y-1.5">
                {/* Checklist Item 1 */}
                <div className="flex items-start gap-1.5 p-1.5 bg-purple-50 rounded">
                  <Checkbox id="teaching-complete" className="mt-0.5" />
                  <label htmlFor="teaching-complete" className="flex-1 cursor-pointer text-gray-900 text-sm">
                    Teaching checklist has been completed
                  </label>
                </div>

                {/* Checklist Item 2 */}
                <div className="flex items-start gap-1.5 p-1.5 bg-purple-50 rounded">
                  <Checkbox id="parents-comfortable" className="mt-0.5" />
                  <label htmlFor="parents-comfortable" className="flex-1 cursor-pointer text-gray-900 text-sm">
                    Parents are comfortable using the feeding pump
                  </label>
                </div>

                {/* Checklist Item 3 */}
                <div className="flex items-start gap-1.5 p-1.5 bg-purple-50 rounded">
                  <Checkbox id="gi-consult" className="mt-0.5" />
                  <label htmlFor="gi-consult" className="flex-1 cursor-pointer">
                    <div className="text-gray-900 text-sm">GI consultation completed</div>
                    <div className="text-gray-600 text-xs">Can reach out to Dr. Rose or Dr. Ochoa via EPIC</div>
                  </label>
                </div>

                {/* Checklist Item 4 */}
                <div className="flex items-start gap-1.5 p-1.5 bg-purple-50 rounded">
                  <Checkbox id="followup" className="mt-0.5" />
                  <label htmlFor="followup" className="flex-1 cursor-pointer">
                    <div className="text-gray-900 text-sm">Follow-up appointments scheduled</div>
                    <div className="text-gray-600 text-xs space-y-0">
                      <div>• Nutrition video visit at 2 weeks</div>
                      <div>• GI/Nutrition clinic at 4 weeks</div>
                      <div>• SLP follow-up within 4 weeks</div>
                    </div>
                  </label>
                </div>

                {/* Checklist Item 5 */}
                <div className="flex items-start gap-1.5 p-1.5 bg-purple-50 rounded">
                  <Checkbox id="discharge-summary" className="mt-0.5" />
                  <label htmlFor="discharge-summary" className="flex-1 cursor-pointer">
                    <div className="text-gray-900 text-sm">Discharge summary documents oral intake allowances</div>
                    <div className="text-gray-600 text-xs">Clearly specifies what child is allowed to take PO</div>
                  </label>
                </div>

                {/* Checklist Item 6 - Supplies with Button */}
                <div className="flex items-start gap-1.5 p-1.5 bg-purple-50 rounded">
                  <Checkbox id="supplies" className="mt-0.5" />
                  <label htmlFor="supplies" className="flex-1 cursor-pointer">
                    <div className="text-gray-900 text-sm mb-1">All feeding supplies ordered and delivered</div>
                    <div className="flex justify-center">
                      <a 
                        href="https://docs.google.com/document/d/1xdJsPiJEkWBqt54VoHbYPS_GgNLKlBJQ/edit?usp=drive_link&ouid=104174892965250681794&rtpof=true&sd=true" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors text-xs"
                      >
                        <FileText size={12} />
                        View Supply List
                      </a>
                    </div>
                  </label>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Print Footer */}
        <div className="mt-3 pt-2 border-t border-gray-300 text-center text-gray-600 text-xs">
          <div className="flex justify-between items-center">
            <span>NICU Caregiver Education - Weill Cornell Medicine</span>
            <span>Generated: {currentDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
